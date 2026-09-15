# UAE hosting and business email shortlist

Researched 15 September 2026 using official vendor documentation. This is a preliminary shortlist, not an uptime benchmark or a binding quotation. No accounts were created or vendors contacted.

## Requirements for the proposal

Leadership mailboxes: `Dr.Shireen@rcmleadership.ae`, `Dr.alaa@rcmleadership.ae`, `Abdulkarim@rcmleadership.ae` (confirm final spelling/capitalisation at provisioning).

Business addresses: `info@seroevents.com` and `contact@seroevents.com`; interpreting the meeting text `infoseroevents.com` as `info@seroevents.com`. Decide whether these need separate inboxes, shared inboxes or aliases. Domain ownership/DNS access has not been verified.

Application, database, files and backups must be placed in the UAE. Seek equivalent UAE residency for business mailbox storage and the application email submission service. A UAE provider office or a .ae domain does not prove UAE hosting. Mail sent to external recipients necessarily reaches their mail systems; UAE storage is not a guarantee that all email processing, routing, support or recipient copies remain in-country.

Self-hosted app authentication does not require running our own business mail server. Keep human correspondence and application notification delivery separate. Password resets, registration confirmations and invitations need reliable queues, retries and delivery/bounce reporting.

## Mailbox providers

| Candidate | Evidence and fit | Pricing / unresolved point |
|---|---|---|
| Microsoft Exchange Online | Preferred shortlist candidate for leadership mail. Microsoft commits UAE-provisioned tenants' Exchange mailbox content at rest to the UAE geography. This covers bodies, calendar entries and attachments, not a blanket all-processing residency promise. | Obtain a UAE quote for standalone Exchange Online and compare Microsoft 365 if office tools are needed. Verify actual tenant location before provisioning. |
| AEserver business email | Local-provider alternative. Product explicitly offers UAE and offshore servers; select UAE in the order. | Published annual-billing equivalents: AED 7.50/month for one mailbox; AED 25/month for five. Confirm support for both domains, backup location and spam-filter/relay location in writing. |
| Zoho Mail | Conditional alternative only. Zoho confirms new Abu Dhabi and Dubai data centres, but the general announcement alone does not establish the selected Mail plan's residency. | Request explicit Mail availability, UAE tenant placement, backups and pricing confirmation. Do not assume signup automatically places mail in the UAE. |

Sources: [Microsoft residency](https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-service-exo?view=o365-worldwide), [Exchange plans](https://www.microsoft.com/en-us/microsoft-365/exchange/exchange-online-business-plans-and-pricing), [AEserver email](https://www.aeserver.com/business-email/), [Zoho UAE announcement](https://www.zoho.com/blog/general/uae-data-centres-abu-dhabi-dubai-launch.html).

## VPS / cloud VM providers

| Candidate | UAE location evidence | Assessment |
|---|---|---|
| AEserver Cloud VPS | Dubai selected on product page | Most direct local VPS option to quote. Published 2 vCPU/4 GB/60 GB SSD: AED 349/month; 4 vCPU/8 GB/100 GB: AED 640/month, VAT extra. Listed base port is 5 Mbps: request an upgrade quote for gallery/download traffic. Confirm modern supported OS and exact management/backup scope; the page contains old OS examples. |
| Oracle Cloud Infrastructure | `me-dubai-1` and `me-abudhabi-1` | Strong cloud alternative if we operate the infrastructure. Two UAE regions allow an in-country backup/recovery design. Each lists one availability domain; merely having two regions does not implement failover. Quote compute, disk, storage, backups and support together. |
| Microsoft Azure | UAE North = Dubai; UAE Central = Abu Dhabi, restricted access | Suitable cloud alternative, particularly with Microsoft operations experience. Use UAE North as the initial candidate; do not assume UAE Central access. Requires sizing and a full bill estimate. |

Sources: [AEserver VPS](https://www.aeserver.com/cloud-vps/), [OCI regions](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/regions.htm), [Azure regions](https://learn.microsoft.com/en-in/azure/reliability/regions-list).

Prices are published snapshots, not an all-in production budget. As a preliminary sizing assumption, quote 4 vCPU/8 GB RAM with storage sized for galleries and backups, then validate against load tests. One VPS remains a single point of failure. Include patching, monitoring, restore tests and separately stored UAE backups in the operating plan.

## Application email delivery

Shortlist OCI Email Delivery using its Dubai endpoint. Oracle documents `smtp.email.me-dubai-1.oci.oraclecloud.com`, and describes Email Delivery as a managed sending/relay service. This is outbound application mail, not staff inbox hosting. Confirm service limits, sender approval, delivery events, queues/log retention and full residency scope before selection. A regional endpoint alone is not proof that every processing stage or backup stays in-country.

Sources: [Dubai SMTP endpoint](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acabi/use-smtp-mail-server-oracle-cloud-infrastructure-email-delivery.html), [Email Delivery](https://docs.oracle.com/en-us/iaas/Content/Email/home.htm).

Proposed sender separation: human replies at `info@seroevents.com` / `contact@seroevents.com`; app messages from an approved address such as `notifications@notify.seroevents.com` with an appropriate Reply-To. Configure SPF, DKIM and DMARC for the chosen senders, test real delivery, handle bounces and keep provider credentials in deployment secrets. Do not promise guaranteed inbox placement.

## Preliminary recommendation

Quote Exchange Online with a UAE tenant for human mail, AEserver Dubai managed VPS versus OCI Dubai for the app, and OCI Dubai Email Delivery for notifications. This recommendation reflects fit and published location evidence; vendor reliability has not been independently measured. Zoho stays conditional pending product-specific confirmation.

Before purchase request: UAE primary/backup locations, any external filtering or processing, SLA and recent incident history, support response targets, recovery times, mailbox/domain limits, app sending limits, and full recurring cost including VAT, management, storage and backups. Recheck service health and capacity at procurement time.
