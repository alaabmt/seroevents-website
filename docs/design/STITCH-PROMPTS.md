# Seroevents — Stitch design prompt pack

## How to use

Upload `seroevents-logo-transparent.png` as the brand reference. Paste the master prompt first, then one numbered page prompt at a time in the same design project. Each page prompt requests light and dark desktop/mobile variants. If starting a new project, paste the master prompt again. These are design instructions; they do not assume any particular Stitch feature or implement a backend.

The SVG is the original PDF artwork with its background rectangles removed, and the PNG is its transparent render. White details are part of the original logo. In light mode place the unchanged logo on a small charcoal brand plaque to keep those details visible. Do not use the failed AI checkerboard preview as an asset.

## Master prompt — shared design system

```text
Design Seroevents, a UAE scientific conferences and healthcare engagement website with attendee accounts and an admin CMS. Use the uploaded SeroEvents molecular logo exactly as supplied; do not redraw or replace it. This is a credible professional conference brand, welcoming to clinicians, researchers, healthcare leaders and partners.

Create one consistent design system with LIGHT and DARK themes. For every requested page, provide the same layout in both themes, at desktop 1440px and mobile 390px. Preserve identical content, hierarchy and functionality between themes. Theme control offers Light, Dark and System and persists across pages. Use visible keyboard focus, accessible contrast, readable 16px body text, labelled forms, generous tap targets, reduced-motion consideration and text/icons alongside status colours.

Brand direction: restrained orange-red accents inspired by the logo, subtle molecular line motifs, editorial typography, ample whitespace and authentic conference photography. Avoid neon gradients, glassmorphism, decorative medical dashboards, fake scientific charts and excessive rounded cards. Suggested light palette: canvas #F7F8FA, white surfaces, text #17202A, muted text #596573, action #B83213 with white text. Dark: canvas #10151B, surfaces #19212B, text #F4F6F8, muted text #B3BECC, accent #FF794F with dark text. Validate contrast in final design. Keep the logo’s original colours, use its blue/yellow sparingly elsewhere. Never stretch the logo. Its white details need a charcoal plaque in light headers; the page background still stays light.

Use a readable contemporary sans-serif, strong headline hierarchy, 8px spacing rhythm, restrained borders, 12px card corners and understated shadows. Public content width around 1200px. Shared components: public header/footer, event card, date/venue block, badges, buttons, labelled fields, tabs, tables, empty/error/loading states, confirmation dialogs and attendee/admin navigation. Mobile tables become useful cards or horizontally scrollable regions without hiding key actions.

Public navigation: Events, About, Services, Scientific Areas, Partnerships, Gallery, Contact; Sign in / My account. Managing Director is under About. Admin navigation is separate and only for admins. Public CTA is Explore events. Footer contains company identity and contact details, not invented legal claims.

Business rules: self-hosted email/password accounts; event registrations automatically confirmed; all signed-in accounts can download agendas without registering; QR passes permit re-entry; admins archive instead of permanently delete. Public “I’m attending” cards never include invitation QR or admission serial. Sharing offers Copy caption, Download card and final Share on LinkedIn. Log only login, explicit logout, registration, agenda download and final LinkedIn redirect-button click in the activity report. QR admission records are separate. Do not show “Published on LinkedIn” or request LinkedIn passwords. No payments, prices, certificates or subscriptions. No fake accreditation, confirmed faculty, testimonials or partner endorsements.

Sample event: Abu Dhabi Healthcare Revenue Cycle Summit 2027, 7–8 May 2027, Abu Dhabi UAE, exact venue to be announced. Subject: reimbursement, revenue integrity, clinical costing and healthcare data/AI. Another upcoming event: ITI Summit 2027, date and venue to be confirmed. Past events: ITI Summit, 25 May 2024, Rosewood Hotel Abu Dhabi; FCHS Future Medicine Symposium, 23 May 2024, Fatima College of Health Sciences Abu Dhabi. Label unconfirmed details honestly. Mark attendee names as sample data in design annotations. Use staged/empty states where real content is missing.

Create visual UI only. Annotate navigation destinations and major state transitions so developers can implement them. Do not expose database columns, hosting infrastructure or security implementation details in attendee screens.
```

## Public pages

### 01. Home — `/`

```text
Use the Seroevents master design system and uploaded logo. Design Home: light/dark themes, desktop/mobile.
Build an editorial homepage with a strong scientific-engagement headline, short business introduction and Explore events CTA. Feature the RCM 2027 event using a date/venue panel, then two past-event case-study cards. Add concise services, scientific approach and partnership invitation. Keep account/signup secondary to event discovery. Include photographic placeholders labelled for replacement, not fabricated past-event images.
Maintain the shared navigation and components. Annotate key interactions.
```

### 02. About — `/about/`

```text
Use the Seroevents master design system and uploaded logo. Design About: light/dark themes, desktop/mobile.
Tell the company story through purpose, vision, mission, values and the origin of Sero. Add a managing-director profile link and a careful scientific-governance section without invented board members. Prefer editorial sections with clear reading flow over a uniform card grid.
Maintain the shared navigation and components. Annotate key interactions.
```

### 03. Managing Director — `/about/managing-director/`

```text
Use the Seroevents master design system and uploaded logo. Design Managing Director: light/dark themes, desktop/mobile.
Create a professional profile for Mr. Abdel Karim Ajam with portrait placeholder, Managing Director title, biography, leadership approach and partnership contact CTA. Do not invent credentials, employers or awards. Use approved-copy placeholders for missing biography.
Maintain the shared navigation and components. Annotate key interactions.
```

### 04. Services — `/services/`

```text
Use the Seroevents master design system and uploaded logo. Design Services: light/dark themes, desktop/mobile.
Present eight services: Medical Conferences, Scientific Forums, Expert Meetings and Roundtables, Medical Education Programmes, Scientific Programme Development, Faculty and Speaker Coordination, Healthcare Partnership Management, End-to-End Event Management. Show clear descriptions and Discuss your event CTA to Contact. Explain these as business services, not existing software features.
Maintain the shared navigation and components. Annotate key interactions.
```

### 05. Scientific Areas — `/scientific-areas/`

```text
Use the Seroevents master design system and uploaded logo. Design Scientific Areas: light/dark themes, desktop/mobile.
Present a readable discipline directory: oncology, hematology, critical care, infectious diseases, cardiology, neurology, precision medicine, digital health and other healthcare disciplines. Explain these are areas the company can support, not claims of past experience in every field. Link to related events only where relevant data exists.
Maintain the shared navigation and components. Annotate key interactions.
```

### 06. Partnerships — `/partners/`

```text
Use the Seroevents master design system and uploaded logo. Design Partnerships: light/dark themes, desktop/mobile.
Explain opportunities for hospitals, societies, universities and industry partners. Show benefits, collaboration types and a prominent partnership enquiry CTA. Include a historical-supporters area only with approved content; no fabricated sponsor logos or sponsorship package pricing.
Maintain the shared navigation and components. Annotate key interactions.
```

### 07. Events directory — `/events/`

```text
Use the Seroevents master design system and uploaded logo. Design Events directory: light/dark themes, desktop/mobile.
Create one event directory with Upcoming and Previous tabs, search, year and subject filters. The upcoming view shows RCM and ITI 2027; the previous view shows the two 2024 events. Cards include banner, status, title, date or TBC, location and View event. Include no-results and loading states. /events/upcoming/ and /events/past/ open these same views, not separate inconsistent designs.
Maintain the shared navigation and components. Annotate key interactions.
```

### 08. Upcoming event detail — `/events/[event-slug]/`

```text
Use the Seroevents master design system and uploaded logo. Design Upcoming event detail: light/dark themes, desktop/mobile.
Create the RCM event detail page with main banner, title, date, city, venue TBC and Register CTA. Navigation tabs: Overview, Programme, Speakers, Photos. Include themes, audience, agenda download, practical information and contact. Guest agenda CTA says Sign in to download; signed-in users get Download agenda even when unregistered. Registered users see View invitation and Share attendance. Include registration closed and cancelled-event states. Use this reusable template for ITI 2027 with TBC facts.
Maintain the shared navigation and components. Annotate key interactions.
```

### 09. Event programme — `/events/[event-slug]/agenda/`

```text
Use the Seroevents master design system and uploaded logo. Design Event programme: light/dark themes, desktop/mobile.
Use the event shell and Programme tab. Show day tabs for the two-day RCM summit and a clean timeline of sessions only as explicitly labelled sample data. Include the real launch state: detailed sessions will be announced. Provide agenda resource/version and a sign-in gate for guests; a signed-in unregistered user can download. Include unavailable agenda state.
Maintain the shared navigation and components. Annotate key interactions.
```

### 10. Event speakers — `/events/[event-slug]/speakers/`

```text
Use the Seroevents master design system and uploaded logo. Design Event speakers: light/dark themes, desktop/mobile.
Use the event shell with speaker cards, optional biography drawer and clearly labelled roles when confirmed content exists. Main launch state: confirmed faculty will be announced progressively. Include scientific contribution CTA. Avoid inventing speaker names, affiliations or portraits presented as real.
Maintain the shared navigation and components. Annotate key interactions.
```

### 11. Past event case study — `/events/[past-event-slug]/`

```text
Use the Seroevents master design system and uploaded logo. Design Past event case study: light/dark themes, desktop/mobile.
Create a completed-event layout reusable for ITI 2024 and FCHS 2024. Show historical date/venue, event overview, selected programme, approved faculty and photo album. Remove active Register CTA. Invite visitors to upcoming events. Historical agendas remain sign-in gated; accreditation appears only if supplied and approved.
Maintain the shared navigation and components. Annotate key interactions.
```

### 12. Gallery directory — `/gallery/`

```text
Use the Seroevents master design system and uploaded logo. Design Gallery directory: light/dark themes, desktop/mobile.
Build a directory of event photo albums, each using its event cover, title, year and photo count. Upcoming events without photos show Photos coming after the event, not invented galleries. Filters for year/event, responsive image grid and useful empty state. Open an individual event album on selection.
Maintain the shared navigation and components. Annotate key interactions.
```

### 13. Event photo album — `/events/[event-slug]/gallery/`

```text
Use the Seroevents master design system and uploaded logo. Design Event photo album: light/dark themes, desktop/mobile.
Create one photo album per event with banner, event title/date, responsive photograph grid, captions and accessible lightbox with previous/next, close and keyboard controls. Include loading and no-photos-yet states. Use photo placeholders labelled as design references. Link back to event details.
Maintain the shared navigation and components. Annotate key interactions.
```

### 14. Contact — `/contact/`

```text
Use the Seroevents master design system and uploaded logo. Design Contact: light/dark themes, desktop/mobile.
Create a simple enquiry page with name, email, organisation, optional position and phone, enquiry category and message. Categories: scientific/conference partnership, industry partnership, speaker/faculty, general. Show info@seroevents.com and contact@seroevents.com. Include validation, submitting, success and retry states. Guest enquiries are provisionally allowed; annotate that account gating is undecided.
Maintain the shared navigation and components. Annotate key interactions.
```

## Accounts and attendee pages

### 15. Sign up — `/sign-up/`

```text
Use the Seroevents master design system and uploaded logo. Design Sign up: light/dark themes, desktop/mobile.
Create an accessible account form with first name, last name, email, password and confirm password; organisation and position optional. Show password visibility and helpful validation. No social login, payments or subscriptions. Preserve the original agenda/event destination after signup. Include submitting, duplicate-email and success states; do not assume mandatory email verification is settled.
Reuse the established components. Annotate destinations and major state transitions.
```

### 16. Sign in — `/sign-in/`

```text
Use the Seroevents master design system and uploaded logo. Design Sign in: light/dark themes, desktop/mobile.
Design email/password sign in, password visibility, Forgot password and Create account. Include invalid credentials, temporary throttling and session-expired states. Redirect back to requested event or agenda after success. Keep account UI calm and concise.
Reuse the established components. Annotate destinations and major state transitions.
```

### 17. Password recovery — `/forgot-password/ and /reset-password/`

```text
Use the Seroevents master design system and uploaded logo. Design Password recovery: light/dark themes, desktop/mobile.
Design the paired recovery screens: request email and generic check-your-email response; reset form with new password and confirmation. Include expired/used link and request-new-link states. Successful reset returns to sign in. Do not reveal whether an email has an account.
Reuse the established components. Annotate destinations and major state transitions.
```

### 18. Account dashboard — `/account/`

```text
Use the Seroevents master design system and uploaded logo. Design Account dashboard: light/dark themes, desktop/mobile.
Create attendee navigation: Overview, My events, Download history, Profile, Sign out. Show next registered event with invitation and sharing actions, recent downloads and Explore events. Empty account state points to upcoming events. No fake attendance achievements or certificates.
Reuse the established components. Annotate destinations and major state transitions.
```

### 19. My events — `/account/events/`

```text
Use the Seroevents master design system and uploaded logo. Design My events: light/dark themes, desktop/mobile.
List the user’s registrations with upcoming/past tabs, registration date and status. Primary actions View registration, View invitation and Share attendance when eligible. Show cancelled event distinctly, but do not invent a self-service cancellation policy. Include zero registrations state.
Reuse the established components. Annotate destinations and major state transitions.
```

### 20. Register for event — `/events/[event-slug]/register/`

```text
Use the Seroevents master design system and uploaded logo. Design Register for event: light/dark themes, desktop/mobile.
Create a focused registration review screen: event banner/title/date/venue, signed-in attendee name/email and Confirm registration. State that registration is automatically confirmed, no payment. Include sign-in gate, already-registered, registration-closed, loading and retry states. Confirmation leads to the registration detail. Do not add manual approval screens.
Reuse the established components. Annotate destinations and major state transitions.
```

### 21. Registration confirmation and detail — `/account/events/[registration-id]/`

```text
Use the Seroevents master design system and uploaded logo. Design Registration confirmation and detail: light/dark themes, desktop/mobile.
Show You are registered, event details, attendee details and confirmation-email status. Clear buttons View invitation and Share attendance. Agenda download remains available. Provide support contact and cancelled-event state. Automatic approval must be clear, with no Pending approval step.
Reuse the established components. Annotate destinations and major state transitions.
```

### 22. Private invitation — `/account/events/[registration-id]/invitation/`

```text
Use the Seroevents master design system and uploaded logo. Design Private invitation: light/dark themes, desktop/mobile.
Design a mobile-friendly admission pass with attendee name, event title, date/location, readable serial and a large QR placeholder labelled DEMO in mockups. Include Download invitation and Re-entry allowed. State Keep this invitation private. No LinkedIn button on the private pass; a separate link goes to public announcement creation. Include revoked/unavailable state.
Reuse the established components. Annotate destinations and major state transitions.
```

### 23. Share attendance — `/account/events/[registration-id]/share/`

```text
Use the Seroevents master design system and uploaded logo. Design Share attendance: light/dark themes, desktop/mobile.
Design a branded public I’m attending image preview with event name/date/city/subject and logo. Exact caption example: I’m glad to announce that I will be attending the Abu Dhabi Healthcare Revenue Cycle Summit 2027 on 7–8 May 2027 in Abu Dhabi, exploring healthcare revenue cycle transformation. Provide editable caption with approved hashtag placeholders, Copy caption, Download card, and final Share on LinkedIn button. State that LinkedIn opens to complete the post. No private serial or QR, no LinkedIn login field and no Published success claim. Include card generating, ready and generation-failed states. The final redirect-button click is the logged sharing action.
Reuse the established components. Annotate destinations and major state transitions.
```

### 24. Download history — `/account/downloads/`

```text
Use the Seroevents master design system and uploaded logo. Design Download history: light/dark themes, desktop/mobile.
Show agenda title, event, version and download date/time, with Download again. Group repeated downloads usefully while preserving timestamps. Include unavailable/archived file and empty states. No requirement to register for the event. Use a clear table on desktop and cards on mobile.
Reuse the established components. Annotate destinations and major state transitions.
```

### 25. Profile and password — `/account/profile/`

```text
Use the Seroevents master design system and uploaded logo. Design Profile and password: light/dark themes, desktop/mobile.
Design editable first/last name, organisation, position and optional phone, with Save changes. Show account email without inventing an unapproved email-change workflow. Separate Change password form with current/new/confirm password, validation and success. No attendee control for assigning roles.
Reuse the established components. Annotate destinations and major state transitions.
```

## Admin pages

### 26. Admin dashboard — `/admin/`

```text
Use the Seroevents master design system and uploaded logo. Design Admin dashboard: light/dark themes, desktop/mobile.
Use a consistent admin sidebar: Overview, Events, Website pages, Media, Agendas, Registrations, Enquiries, Users, Activity, Check-in, Settings. Show actionable counts for published events, confirmed registrations and new enquiries; no fabricated revenue metrics. Recent content and quick Create event action. Use labelled sample data and empty states. Admins enter through the same sign-in page.
Reuse the established components. Annotate destinations and major state transitions.
```

### 27. Event management — `/admin/events/`

```text
Use the Seroevents master design system and uploaded logo. Design Event management: light/dark themes, desktop/mobile.
Design search, Upcoming/Previous/Archived filters and an event table with title, date, publication state, registration state and actions Edit, Preview, Archive. Primary Add event. Archive dialog explains removal from public listings while preserving history. Never show permanent Delete. Include archived and empty views.
Reuse the established components. Annotate destinations and major state transitions.
```

### 28. Event editor — `/admin/events/new/ and /admin/events/[id]/edit/`

```text
Use the Seroevents master design system and uploaded logo. Design Event editor: light/dark themes, desktop/mobile.
Design create/edit with tabs Details, Programme, Speakers, Photos, Agendas, Sharing. Details include title, slug, summary, subject, structured content, main banner, confirmed date/time/timezone or TBC, venue or TBC, publication and registration open/closed dates. Automatic approval is fixed for launch with a note; no approval queue. Show draft/save/publish states, validation, unsaved changes and preview. Preserve this editor shell for the next three prompts.
Reuse the established components. Annotate destinations and major state transitions.
```

### 29. Programme and faculty editor — `/admin/events/[id]/programme/`

```text
Use the Seroevents master design system and uploaded logo. Design Programme and faculty editor: light/dark themes, desktop/mobile.
Within event editor, design ordered sessions with title, description, date/time, room, published state and assigned faculty. Faculty cards support name, role, organisation, biography, portrait and invited/confirmed status; invited records are not automatically public. Add/edit/archive dialogs and programme empty state. Do not invent real faculty.
Reuse the established components. Annotate destinations and major state transitions.
```

### 30. Event album and media manager — `/admin/events/[id]/photos/ and /admin/media/`

```text
Use the Seroevents master design system and uploaded logo. Design Event album and media manager: light/dark themes, desktop/mobile.
Design an event banner upload plus one album of event photos, drag-to-reorder, captions, alt text and publish controls. Include image upload progress, invalid type/size, retry, archive confirmation and no-photos state. General media manager uses the same grid with search and public/private indicators. Do not make restricted agenda files publicly accessible through the media browser.
Reuse the established components. Annotate destinations and major state transitions.
```

### 31. Agenda management — `/admin/agendas/ and /admin/agendas/[id]/`

```text
Use the Seroevents master design system and uploaded logo. Design Agenda management: light/dark themes, desktop/mobile.
Design agenda list and create/edit drawer with title, event association, description, file upload, version number/change note and publish/archive controls. Access is fixed to All signed-in users; event registration is not required. Show version history, upload state, file replacement creating a new version and an archive dialog preserving download history.
Reuse the established components. Annotate destinations and major state transitions.
```

### 32. Website page editor — `/admin/pages/ and /admin/pages/[id]/`

```text
Use the Seroevents master design system and uploaded logo. Design Website page editor: light/dark themes, desktop/mobile.
Design page list and structured content editor for Home, About, Director, Services, Scientific Areas, Partnerships and Contact. Include draft/published/archived state, SEO title/description, preview and image picker. Use reorderable sections and rich text, not a code editor. Show save/publish validation and soft archive.
Reuse the established components. Annotate destinations and major state transitions.
```

### 33. Registrations — `/admin/registrations/ and /admin/registrations/[id]/`

```text
Use the Seroevents master design system and uploaded logo. Design Registrations: light/dark themes, desktop/mobile.
Design event filter, search and registration table with attendee, email, event, registration date and confirmed/cancelled status. Detail drawer shows attendee info, private invitation reference and first/latest check-in. Explain registrations auto-confirm; no approve/reject workflow at launch. Do not display secret QR token values. Distinguish number of attendees from number of entry scans.
Reuse the established components. Annotate destinations and major state transitions.
```

### 34. Enquiry inbox — `/admin/enquiries/ and /admin/enquiries/[id]/`

```text
Use the Seroevents master design system and uploaded logo. Design Enquiry inbox: light/dark themes, desktop/mobile.
Design inbox list/detail split with sender, type, event if linked, timestamp, message and New/In progress/Resolved/Closed status. Include assigned team member and email reply link without inventing an in-app outbound conversation system. Search, filters, empty state and status-change feedback.
Reuse the established components. Annotate destinations and major state transitions.
```

### 35. Users — `/admin/users/ and /admin/users/[id]/`

```text
Use the Seroevents master design system and uploaded logo. Design Users: light/dark themes, desktop/mobile.
Design user search/list with name, email, organisation, status and attendee/admin role. User detail includes registrations and agenda history. Keep role management explicit and restricted with confirmation; no bulk grant-admin flow, password viewing or impersonation. Only necessary attendee data appears. No hard deletion.
Reuse the established components. Annotate destinations and major state transitions.
```

### 36. Activity report — `/admin/activity/`

```text
Use the Seroevents master design system and uploaded logo. Design Activity report: light/dark themes, desktop/mobile.
Design exactly five filterable action types: Login, Logout, Event registration, Agenda download, LinkedIn share click. Columns: user, action, event/agenda where relevant, date/time and outcome. Filters by user/action/event/date. Detail drawer can identify agenda version. LinkedIn label says Final share button clicked, never Post published. Do not include page-view tracking or marketing dashboards. Retention duration is not yet decided; do not invent a default.
Reuse the established components. Annotate destinations and major state transitions.
```

### 37. QR entry scanner — `/admin/check-in/`

```text
Use the Seroevents master design system and uploaded logo. Design QR entry scanner: light/dark themes, desktop/mobile.
Design a mobile-first staff/admin scanner with event selector, camera area, camera permission/denied state and manual serial lookup within authenticated staff access. First scan: Valid invitation, attendee and Record entry. Repeat scan: Previously checked in at [time], Re-entry allowed, Record re-entry. Invalid/revoked/cancelled pass is rejected. Record each successful admission. Prevent repeated processing while the same QR remains in frame. Show total distinct attendees separately from total admissions. Network failure says Unable to validate, retry; never claim offline admission support.
Reuse the established components. Annotate destinations and major state transitions.
```

### 38. Settings and sharing templates — `/admin/settings/`

```text
Use the Seroevents master design system and uploaded logo. Design Settings and sharing templates: light/dark themes, desktop/mobile.
Create settings tabs Brand and contact, Social sharing, Email status. Brand: logo, company name and approved contact addresses. Social: official LinkedIn page URL, hashtags, caption template, card preview and default/event override. Email: display configured leadership/business sender addresses and test-status placeholders, not a mail-server provisioning interface or API-secret fields. Include save success/error. Keep theme choice personal, not a global switch changing every user’s preference.
Reuse the established components. Annotate destinations and major state transitions.
```

## Shared error screens

### 39. Not found, access denied and service failure — `/404, /403 and shared error states`

```text
Use the Seroevents master design system and uploaded logo. Design Not found, access denied and service failure: light/dark themes, desktop/mobile.
Design three compact reusable screens: missing page with Explore events; access denied with Back to my account; temporary service issue with Retry and Contact. Use logo, theme control, clear language and accessible actions. Never expose stack traces, database details or another user’s data.
Reuse the established components. Annotate destinations and major state transitions.
```

## Final consistency pass — paste after the page designs

```text
Review all Seroevents screens as one product. Unify spacing, typography, logo sizing, colours, buttons, status labels, event facts and navigation. Compare each light screen with its dark equivalent; layouts and functionality must match. Check mobile overflow, readable tables, focus states, input labels and contrast. Trace guest-to-agenda-sign-in, automatic event registration, private invitation, public announcement and final LinkedIn button flows. Verify re-entry allowed, archive-only deletion and the five-action activity report. Remove payment, certificate, subscription, manual-approval and confirmed-LinkedIn-publication UI. Keep unconfirmed event details labelled TBC. Produce a component/state inventory for developer handoff.
```

## Scope notes

These 39 prompt groups cover reusable pages and related states; they do not imply 40 unique backend routes or separately priced features. Routes are proposed. Upcoming/past listings share one directory; each event reuses the same templates. Advisory-board and venue/travel standalone pages remain deferred, with available information within event details. Email verification, admin export tools and advanced account changes are not silently added as confirmed features. Infrastructure and domain email provisioning are operational deliverables rather than public website pages.
