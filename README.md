# nextjs-v16-app

This is my little test app. <br/>
Currently, I am playing with:

## SENTRY.IO

`pnpm dlx @sentry/wizard@latest -i nextjs --saas --org egxodev --project javascript-nextjs`

Start your development server and visit /sentry-example-page if you have set it up. Click the button to trigger a test error.
Or, trigger a sample error by calling a function that does not exist somewhere in your application.

```
myUndefinedFunction();
```

If you see an issue in your Sentry Issues, you have successfully set up Sentry with Next.js.

## REACT COMPILER

```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default nextConfig;
```

## ESLINT PLUGIN PACKAGES

eslint-plugin-depend <br/>
`pnpm add -D eslint-plugin-depend`

eslint-plugin-react-you-might-not-need-an-effect <br/>
`pnpm add -D eslint-plugin-react-you-might-not-need-an-effect`

## OTHER RANDOM PACKAGES

#### DEPLOYMENT CHECKLIST <br/>

[webdev-checklist](https://webdev-checklist.vercel.app) <br/>
`pnpm dlx webdev-checklist`

#### NEXT-VIEW TRANSITIONS <br/>

[@ssgoi/react](https://ssgoi.dev/en) <br/>
`pnpm add webdev-checklist`

<hr/>

#### Cheers.
