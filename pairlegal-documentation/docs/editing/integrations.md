# Integrations

## Sharepoint

SingleDraft seamlessly connects with your SharePoint documents, enhancing your
existing document management workflow. Here's how to set it up:

### Step 1: Grant Access Permissions

:::warning
User doing this step must have `Privileged Role Administrator` role in
their Azure Entra tenant.
:::

1. Navigate to our [Consent initiation page](https://sp.singledraft.ai)
1. Sign in to your SingleDraft account (or create one if you haven't already).
1. You'll see an option to initiate the permission process. The consent is about
   you giving access to our application to read files and user groups
   in your SharePoint.
1. Upon confirmation, you'll be directed to Microsoft's consent page where you can
   review and approve the requested permissions.

### Step 2: Configure Your Document Source

To enable document synchronization, please provide:

1. Your SharePoint Site URL that contains folder(s) for synchronization, e.g.,
   `https://<your-domain>.sharepoint.com/sites/<name-of-your-site>`
1. Relative paths to folders that contains the documents for synchronization, e.g.,
   `templates/curated`

### Step 3: User Access Management

SingleDraft manages access through SharePoint's existing group structure. The system:

- References the user group matching your SharePoint site name
- Grants access to users based on their email addresses within that group
- Maintains your existing permission hierarchy

:::warning
Please review this access model to ensure it aligns with your organization's
security requirements.
:::

### What Happens Next
Once configured, your documents will be available in the SingleDraft plugin within
a few hours. The system will maintain ongoing synchronization to ensure your
content stays current.
