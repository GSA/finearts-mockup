# Fine Arts mockup

A mockup of the new Fine Arts website.

## Development

This site is built with [Eleventy](https://www.11ty.dev/) and incorporates [USWDS](https://designsystem.digital.gov/), as well as the [uswds-compile tool](https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/).

### Setup

Install `npm` dependencies:

```bash
npm install
```

### Local server

Run the Eleventy built-in dev server and watch for changes at the same time:

```bash
npm start
```

### Updating stylesheets

* To configure USWDS settings, edit `/sass/_uswds-theme.scss`
* To add custom styles, edit `/sass/_uswds-theme-custom-styles.scss`

If you're already running `npm start` or `npm run uswds:watch`, USWDS will automatically compile changes to these files and output the compiled resources to `/assets/uswds`. Otherwise, you can tell USWDS to compile with `npm uswds:compile`.

## Deployment

This mockup doesn't have a CI/CD pipeline set up, but it's easy to deploy your own instance of it to [Federalist](https://federalist.18f.gov/) or [cloud.gov](https://cloud.gov/), whichever you have access to.

### cloud.gov

If using a cloud.gov sandbox:

1. Create a [cloud.gov sandbox account](https://cloud.gov/sign-up/) if needed
2. [Sign in to cloud.gov](https://cloud.gov/docs/getting-started/setup/) via the CF CLI
3. Build and deploy the `_site` directory as a static site:
    ```bash
    npm install
    npm run build:clean
    cf push <make up an app name here>
    ```
