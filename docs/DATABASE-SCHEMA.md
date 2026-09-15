# Proposed database schema

This is the proposed logical schema for the agreed Seroevents scope, not an implemented migration. PostgreSQL is the working assumption; the hosting and authentication provider remain undecided. Authentication will be self-hosted with hashed passwords. No external identity provider is planned.

## Conventions

- Primary keys are UUIDs named `id` unless a composite key is specified.
- Timestamps use `timestamptz`, stored in UTC; event display timezone is stored separately.
- `?` means nullable. References identify foreign keys. Text statuses have CHECK constraints or equivalent enums.
- Normal tables have `created_at` and `updated_at`. Immutable records use `occurred_at` or `created_at` only, as specified.
- Email addresses are normalised and unique case-insensitively. Object storage holds files; the database holds metadata and storage keys.
- Archive operational records rather than cascade-deleting registrations, passes or audit history. Retention-driven deletion/anonymisation is a separate controlled process.

## 1. Identity and access

### users

Attendee profile and application identity.

| Column | Type / rule |
|---|---|
| id | uuid PK |
| password_hash | text; encoded password hash including algorithm, salt and parameters |
| password_changed_at | timestamptz |
| email | text, normalised UNIQUE |
| email_verified_at | timestamptz? |
| first_name, last_name | text |
| organisation, job_title, phone | text? |
| avatar_asset_id | uuid? → assets |
| status | active / suspended / anonymised |
| created_at, updated_at | timestamptz |

Never store plaintext passwords. Use a maintained authentication library and password-hashing implementation; final algorithm and parameters will be reviewed during implementation. Login, logout, password reset, throttling and session revocation are owned by this application.

### user_roles

| Column | Type / rule |
|---|---|
| user_id | uuid → users |
| role | attendee / admin |
| granted_by | uuid? → users; null for controlled initial provisioning |
| granted_at | timestamptz |

Composite PK `(user_id, role)`. Only a trusted admin operation can grant/revoke roles; every change is audited. All registered people can use attendee features; admin is an additional assignment.

### sessions

Self-hosted server-side sessions. Set the raw random session token only in a secure, HttpOnly cookie; store its hash in the database.

| Column | Type / rule |
|---|---|
| id | uuid PK |
| user_id | uuid → users |
| token_hash | text UNIQUE; hash of a cryptographically random session token |
| started_at, expires_at | timestamptz |
| last_seen_at | timestamptz?; approximate, not every request |
| ended_at | timestamptz? |
| end_reason | logout / expired / revoked, nullable while active |

Never store usable session tokens in logs or the database. Browser closure is not a reliable session-end event.

### account_tokens

`id uuid PK`, `user_id uuid → users`, `purpose text` (email_verification/password_reset), `token_hash text UNIQUE`, `created_at timestamptz`, `expires_at timestamptz`, `consumed_at timestamptz?`, `revoked_at timestamptz?`.

Tokens are random, time-limited and single-use; consume atomically. Password reset revokes existing sessions. Whether email verification is mandatory before download/registration remains a separate decision; an account and an authenticated session are the currently agreed access requirement.

## 2. Files and public content

### assets

| Column | Type / rule |
|---|---|
| id | uuid PK |
| storage_key | text UNIQUE |
| original_filename, mime_type | text |
| byte_size | bigint, nonnegative |
| checksum_sha256 | text |
| width, height | integer? |
| visibility | public / private |
| alt_text | text? |
| uploaded_by | uuid? → users |
| created_at, updated_at, archived_at | timestamptz; archived_at nullable |

Documents, images, invitation files and social images can all reference this table. Private files require backend authorisation; knowledge of a storage key must not grant access.

### pages

CMS-managed company pages such as About and Services.

| Column | Type / rule |
|---|---|
| id | uuid PK |
| slug | text UNIQUE |
| title | text |
| body | jsonb; validated structured content blocks |
| status | draft / published / archived |
| seo_title, seo_description | text? |
| social_image_asset_id | uuid? → assets |
| published_at | timestamptz? |
| created_by, updated_by | uuid → users |
| created_at, updated_at | timestamptz |

Structured blocks need an explicit schema and safe rendering; JSON is not permission to execute arbitrary HTML/scripts.

### events

| Column | Type / rule |
|---|---|
| id | uuid PK |
| slug | text UNIQUE |
| title, summary | text |
| description | jsonb; validated content blocks |
| subject | text?; used in social captions |
| start_at, end_at | timestamptz?; nullable for unconfirmed dates |
| timezone | text; e.g. Asia/Dubai |
| date_status | confirmed / to_be_confirmed |
| venue_name, venue_address, city, country_code | text? |
| venue_status | confirmed / to_be_confirmed |
| cover_asset_id | uuid? → assets |
| publication_status | draft / published / archived |
| event_status | scheduled / postponed / cancelled / completed |
| registration_status | not_open / open / closed |
| registration_mode | immediate / approval_required; DEFAULT immediate; approval workflow deferred |
| registration_opens_at, registration_closes_at | timestamptz? |
| seo_title, seo_description | text? |
| published_at | timestamptz? |
| created_by, updated_by | uuid → users |
| created_at, updated_at | timestamptz |

Validate end >= start and registration-close >= registration-open when supplied. Derive upcoming/past from event dates/status; do not maintain competing boolean flags. An archived event is hidden from discovery but remains available in historical records subject to policy.

### event_media

Event photo galleries.

| Column | Type / rule |
|---|---|
| id | uuid PK |
| event_id | uuid → events |
| asset_id | uuid → assets |
| caption | text? |
| sort_order | integer |
| published | boolean |
| created_at, updated_at | timestamptz |

UNIQUE `(event_id, asset_id)`.

### speakers

`id uuid PK`, `full_name text`, `job_title text?`, `organisation text?`, `biography jsonb?`, `photo_asset_id uuid? → assets`, `created_at`, `updated_at`, `archived_at?`.

### event_speakers

`id uuid PK`, `event_id uuid → events`, `speaker_id uuid → speakers`, `role text` (speaker/chair/moderator/advisor), `confirmation_status text` (invited/confirmed), `published boolean`, `sort_order integer`, `created_at`, `updated_at`.

UNIQUE `(event_id, speaker_id, role)`. Invited people should not automatically appear publicly as confirmed faculty.

### agenda_sessions

`id uuid PK`, `event_id uuid → events`, `title text`, `description text?`, `start_at timestamptz?`, `end_at timestamptz?`, `room text?`, `sort_order integer`, `published boolean`, `created_at`, `updated_at`.

### agenda_session_speakers

`agenda_session_id uuid → agenda_sessions`, `event_speaker_id uuid → event_speakers`.

Composite PK of both columns. Enforce that session and event-speaker belong to the same event, through a validated database constraint/trigger or composite FK design in migrations.

## 3. Registrations and admission

### registrations

| Column | Type / rule |
|---|---|
| id | uuid PK |
| user_id | uuid → users |
| event_id | uuid → events |
| status | pending / confirmed / declined / cancelled |
| registered_at | timestamptz |
| confirmed_at, cancelled_at | timestamptz? |
| reviewed_by | uuid? → users |
| reviewed_at | timestamptz? |
| created_at, updated_at | timestamptz |

UNIQUE `(user_id, event_id)`. Re-registration updates the same record with an audited transition. Validate permitted transitions, event registration state and email verification on the server. Use transactions and uniqueness constraints for concurrent requests.

### passes

| Column | Type / rule |
|---|---|
| id | uuid PK |
| registration_id | uuid → registrations |
| serial_number | text UNIQUE; display identifier, not admission credential |
| token_hash | text UNIQUE; hash of unguessable QR token |
| status | active / revoked / expired |
| invitation_asset_id | uuid? → assets; private |
| issued_at | timestamptz |
| expires_at, revoked_at | timestamptz? |
| replaced_by_pass_id | uuid? → passes |

Partial UNIQUE on `registration_id` where status=active. Reissuing revokes the previous pass. Do not retain raw QR tokens in audit metadata; regeneration should rotate the token if the raw value is unavailable. Private invitation assets themselves contain credentials and need equivalent protection.

### check_ins

These columns describe successful admissions, including re-entry; rejected scans go to the activity log. Re-entry is allowed and must be highlighted in the proposal.

`id uuid PK`, `pass_id uuid → passes`, `checked_in_by uuid → users`, `checked_in_at timestamptz`, `request_id uuid UNIQUE`. Multiple admission records per pass are allowed; request_id prevents duplicate processing of the same scan request.

Re-entry is confirmed: a valid pass remains usable after its first scan. Display the original check-in and identify subsequent admissions as re-entry; record each successful admission. Check cancellation, revocation and validity on every scan and insert check-in atomically. Count distinct passes for attendee totals rather than counting scans. Admin access is the initial role; a restricted staff role would be an explicit scope addition.

## 4. Documents and downloads

### documents

| Column | Type / rule |
|---|---|
| id | uuid PK |
| event_id | uuid? → events; null for general resources |
| title, slug | text; slug UNIQUE |
| description | text? |
| category | agenda / brochure / resource / other |
| access_policy | public / authenticated / confirmed_attendee |
| status | draft / published / archived |
| created_by, updated_by | uuid → users |
| created_at, updated_at | timestamptz |

Agendas use `authenticated`: every signed-in account can download, without event registration. This interprets the client’s “cant download” as “can download,” consistent with their stated all-signed-up-users policy. A confirmed-attendee policy is reserved for future resources and is not required for launch.

### document_versions

`id uuid PK`, `document_id uuid → documents`, `version_number integer`, `asset_id uuid → assets`, `change_note text?`, `published_at timestamptz?`, `created_by uuid → users`, `created_at timestamptz`.

UNIQUE `(document_id, version_number)`. Published versions are immutable; the current version is the highest published version_number. Asset visibility must be consistent with access policy, including previously issued URLs when policies change.

### document_downloads

`id uuid PK`, `user_id uuid? → users`, `document_version_id uuid → document_versions`, `session_id uuid? → sessions`, `requested_at timestamptz`, `delivered_at timestamptz?`, `outcome text` (authorised/delivered/denied/failed), `delivery_method text` (proxy/signed_link), `request_id uuid UNIQUE`.

A signed link being issued is only authorised, not proof of file delivery. Record delivery only when supported by a proxy/storage event. Repeated legitimate downloads get separate request IDs; retries of the same tracked operation are idempotent. The user history displays only their appropriate successful records. Public anonymous downloads have no attributable user.

## 5. Social cards and sharing

### social_templates

`id uuid PK`, `event_id uuid? → events`, `name text`, `caption_template text`, `hashtags text[]`, `organisation_linkedin_url text?`, `background_asset_id uuid? → assets`, `layout_config jsonb`, `version integer`, `active boolean`, `created_by uuid → users`, `created_at`, `updated_at`.

Null event_id means reusable default template. Validate placeholder names and layout configuration. Official page URL is confirmed by the business; actual platform mentions are not guaranteed by storing text.

### generated_cards

`id uuid PK`, `registration_id uuid → registrations`, `template_id uuid → social_templates`, `template_version integer`, `render_snapshot jsonb`, `asset_id uuid? → assets`, `caption text`, `status text` (queued/ready/failed/stale), `failure_code text?`, `created_at`, `completed_at timestamptz?`.

Snapshot stores approved rendering inputs, event details and template settings for reproducibility. Cards exclude pass serials/QR credentials. Default to private access until the attendee chooses to share. Use activity events for card download/share-click tracking; a share click is not proof of a published social post.

## 6. Enquiries, email and settings

### enquiries

`id uuid PK`, `user_id uuid? → users`, `event_id uuid? → events`, `name text`, `email text`, `organisation text?`, `job_title text?`, `phone text?`, `enquiry_type text`, `message text`, `status text` (new/in_progress/resolved/closed), `assigned_to uuid? → users`, `created_at`, `updated_at`, `resolved_at timestamptz?`.

Name/email are a contact snapshot. Keep message bodies out of audit metadata. Anonymous enquiries remain possible until the account-gating requirement is decided.

### email_deliveries

`id uuid PK`, `user_id uuid? → users`, `registration_id uuid? → registrations`, `enquiry_id uuid? → enquiries`, `recipient_email text`, `template_key text`, `status text` (queued/sent/delivered/failed/bounced), `provider_message_id text? UNIQUE`, `idempotency_key text UNIQUE`, `attempt_count integer`, `last_error_code text?`, `created_at`, `updated_at`, `sent_at timestamptz?`, `delivered_at timestamptz?`.

Tracks invitations, registration confirmations and enquiry acknowledgements. Sent means accepted for sending; delivered requires provider evidence. Avoid logging full emails or secret links. Authentication email delivery may remain provider-managed.

### site_settings

`id text PK` (single row, `site`), `organisation_name text`, `contact_email text`, `linkedin_url text?`, `instagram_url text?`, `default_hashtags text[]`, `logo_asset_id uuid? → assets`, `default_social_asset_id uuid? → assets`, `updated_by uuid → users`, `created_at`, `updated_at`.

Do not use CMS settings for service API keys; use deployment secrets.

## 7. Activity and audit logging — required from day one

### activity_events

| Column | Type / rule |
|---|---|
| id | uuid PK |
| occurred_at | timestamptz; trusted server/provider time where possible |
| received_at | timestamptz; database ingestion time |
| actor_user_id | uuid? → users; nullable for unknown/anonymous actor |
| session_id | uuid? → sessions |
| actor_kind | user / admin / system / anonymous |
| action | controlled text key, e.g. auth.sign_in, event.view, registration.confirm |
| outcome | success / failure / denied |
| entity_type | text?; event/document/registration/user/etc. |
| entity_id | uuid?; polymorphic reference for description, not an FK |
| event_id | uuid? → events; convenient event report filter |
| request_id | uuid?; correlation across events |
| source | server / auth_provider / client_telemetry / storage_provider |
| source_event_id | text?; deduplicates external delivery |
| metadata | jsonb; action-specific allowlisted fields only |

UNIQUE `(source, source_event_id)` where source_event_id is not null. Nullable actor identity allows logging failed authentication without creating or assuming a user. If IP or user-agent collection is required, agree purpose/retention before adding minimised fields; it is not automatically included.

Suggested action keys: auth.sign_in, auth.sign_out, auth.failed_sign_in, auth.session_expired, auth.session_revoked, event.view, registration.create, registration.confirm, registration.cancel, document.authorise, document.deliver, document.deny, pass.issue, pass.revoke, pass.scan, card.generate, card.download, social.share_click, enquiry.create, cms.create, cms.update, cms.archive, role.grant, role.revoke.

Server business changes and their audit entries must commit atomically. External auth/storage events require verified ingestion, deduplication and reconciliation. If reliable delivery needs an outbox/worker queue, add it as infrastructure once the stack is selected. Best-effort client page views are explicitly lower-trust telemetry.

The normal application role cannot update/delete audit rows. An admin viewer is read-only. A separately controlled retention process can remove/anonymise records according to the agreed policy. No passwords, access tokens, QR secrets, full document contents or unrestricted request bodies in metadata.

## Access and indexes

- Public: published pages/events/media and public resources only. Never query raw user, pass or log tables from public views.
- Attendee: own profile, sessions, registrations, passes, generated cards and download history; server-side permission checks on every operation.
- Admin: CMS and necessary operational records; audit viewer read-only. User-facing endpoints never accept role grants from profile input.
- Useful indexes: registrations(user_id, registered_at), registrations(event_id, status), events(publication_status, start_at), documents(event_id, status), document_downloads(user_id, requested_at), activity_events(actor_user_id, occurred_at), activity_events(event_id, occurred_at), activity_events(action, occurred_at).
- Audit rows grow quickly. Set retention and volume expectations before choosing partitioning; avoid storing every HTTP asset request as a user action.
- Backups, migration strategy and restore testing apply to both database metadata and object storage.

## Confirmed client decisions

- Self-hosted authentication with hashed passwords and server-side sessions.
- Agendas are available to all signed-in accounts, independent of event registration (wording assumption noted above).
- Registration is automatically confirmed by default. Highlight this in the proposal; manual approval is deferred.
- Admins can add and edit; delete means soft-delete/archive only. Add nullable `archived_at` and `archived_by → users` to CMS-managed tables, and exclude archived content from public listings. Preserve registration/download history and referenced files. No permanent-delete CMS action for launch.
- Each event has a main banner/background through `events.cover_asset_id`, plus one event photo album through `event_media`. No separate albums table is necessary for one album per event; multiple named albums can be added later.
- No payments, certificates or subscriptions in scope.
- QR re-entry is allowed. Highlight this explicitly in the proposal alongside automatic registration approval. Re-entry does not bypass pass expiry, revocation or registration cancellation.

## Items to decide before migrations

Whether email verification is required; activity retention and exports. The document access wording assumption should be confirmed.

## Latest client activity-log scope (supersedes broader launch report)

Launch activity reporting contains only login, explicit logout, event registration, agenda download and LinkedIn share initiation. Use action keys `auth.sign_in`, `auth.sign_out`, `registration.create`, `agenda.download`, `social.linkedin_share_opened`. Use the existing actor/time/resource/outcome fields; retain exact document version for downloads. A share URL cannot confirm publication, so label this action “LinkedIn sharing initiated.” Retention is not yet specified. Broader security/operational diagnostics are distinct from the client-facing report and are not additional promised activity-report features.

## Confirmed LinkedIn logging acceptance

The final “Share on LinkedIn” button click that redirects the attendee to LinkedIn is sufficient to complete the sharing action in our activity log. Record `social.linkedin_share_clicked` with the user, event and timestamp. No confirmation of publication on LinkedIn is required. This supersedes earlier provisional sharing-action names; it measures the final redirect-button click, not an earlier card preview or caption-copy action.
