# Integrations

## Sharepoint

If you have documents in the SharePoint which you want to share with SingleDraft,
these are the steps to follow.

### Application Access Consent

:::warning
User doing this step must have `Privileged Role Administrator` role in
their Azure Entra tenant.
:::

1. Visit [Consent initiation page](https://sp.singledraft.ai)
1. If you have already user account at SingleDraft, please log in with this account,
   else please create new account.
1. Once logged in, the page provides you with a button that if clicked initiates
   consent process. The consent is about you giving access to our application to read
   files and user groups in your SharePoint.
1. Once the button is clicked, you will be redirected to Microsoft Consent page that
   displays our application requesting consent for given permissions.

### Synchronization

For SingleDraft to start synchronization with your documents, we need you to provide us:

1. Your SharePoint Site URL that contains folder(s) for synchronization, e.g.,
   `https://<your-domain>.sharepoint.com/sites/<name-of-your-site>`
1. Relative paths to folders that contains the documents for synchronization, e.g.,
   `templates/curated`

### User Data Access

SingleDraft synchronization service looks at the user group with the same name
as the name of the Site that should be synchronized, reads all the user emails and then
this accounts can see the synchronized data in the SingleDraft plugin.

:::warning Please make sure this is acceptable data access inheritance.
:::

Once the consent is given and the information above is provided, we will setup
the integration and the documents will appear in the SingleDraft plugin
within several hours.
