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
* To add custom styles, edit `/sass/styles.scss`

If you're already running `npm start` or `npm run uswds:watch`, USWDS will automatically compile changes to these files and output the compiled resources to `/assets/uswds`. Otherwise, you can tell USWDS to compile with `npx gulp compile`.
