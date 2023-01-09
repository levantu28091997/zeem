This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Code linting

We are mainly using eslint with rule configured in `.eslintrs.json` file. More options can be found at https://eslint.org/docs/latest/rules/

To make VSCode automatically format on save, follows belowed steps:

- Hit Control + Shift + P (On Mac you would want to hit the Command key instead of Control) and search for >Format Document With.... Check if that work.

- If it works, then maybe your setting is overridden. Open your settings.json file (Use Control + ,, then on the top right corner you would see the open settings.json). Check the javascriptreact section.

- Here is the example: this setting turns on formatOnSave for all the document type, but with .jsx extension, the formatOnSave is disabled, instead the files are formatted using eslint

```
{
  // Other settings, don't mind it
  // ...

  "editor.formatOnSave": true,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.formatOnSave": false
  },

  // Other settings, don't mind it
  // ...
}
```
You may want to update the settings based on your need.


## UI Design 
We are aiming to use [mui](https://mui.com/), you can find example for Typescript [here](https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript)
  
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
