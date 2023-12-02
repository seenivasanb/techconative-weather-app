# Techconative Weather App

Hi! This assignment project serves as a demonstration of my proficiency and expertise in crafting a web application using **ReactJS** with a foundation built upon **Next.js** and its associated ecosystem.

The project revolves around creating a web application using Next.js with the primary objective of providing users with accurate and timely weather forecasts. Users will have the capability to search for specific locations or select predefined ones. The application will then fetch relevant weather data and present it in an accessible and user-friendly manner.

The implementation will leverage the capabilities of Next.js to ensure a seamless and efficient user experience, with a focus on responsiveness and real-time updates for weather information.

## Key Attributes

- **[Development Features](#development-features)**
- **[Script Commands](#script-commands)**
- **[Husky Hooks](#husky-hooks)**
- **[Getting Started](#getting-started)**
  - **[Fork the Repository](#fork-the-repository)**
  - **[Install the Dependency](#install-the-dependency)**
  - **[Run the Project](#run-the-project)**
  - **[Commit the Code](#commit-the-code)**
  - **[Push to remote](#push-to-remote)**

## Development Features

- [x] **Bootstrapped with [create-next-app][cna-link]** for React app development
- [x] **[ESLint][eslint-link] and [Prettier][prettier-link]** for code standard and formatting
- [x] **[Typescript][typescript-link]** for type-check
- [x] **[TailwindCSS][tailwind-link]** for styling
- [x] **[Husky][husky-link] Hook** for git pre-commit and pre-push validation
- [x] **[Commitlint][commitlint-link]** for commit-msg validation for consistency

## Script Commands

- <code>"dev": "next dev"</code> - to run the dev server
- <code>"start": "next start"</code> - to run the project for demo
- <code>"build": "next build"</code> - to build the project to prepare for launch
- <code>"lint": "next lint"</code> - to run the ESLint and ensure the clean coding
- <code>"prepare": "husky install"</code> - to ensure the husky install on node modules installation
- <code>"commit": "git-cz"</code> - to commit the customised message for consistency and easy to identify

## Husky Hooks

- <code>commit-msg</code> - to run the commit-lint to ensure the commit message format to maintain the consistency.
- <code>pre-commit</code> - to run the ESLint command and ensure the coding standard before committing the changes.
- <code>post-commit</code> - to run the build command and ensure the code quality and project stability before the code push.

## Getting Started

### Fork the Repository

Fork the repository and generate a new branch from the main branch.

```bash
git clone https://github.com/seenivasanb/techconative-weather-app.git
```

### Install the Dependency

After cloning the project, navigate to the root directory `techconative-weather-app` in the terminal. Execute the following command to install the required node modules for running the project.

```bash
~techconative-weather-app> npm install
# or below for yarn
~techconative-weather-app> yarn install
```

Make sure, you are installed the `npm` or `yarn` package in your local machine.

### Run the Project

Once the node modules are successfully installed, execute the following command to run the `NextJS` project in development mode.

```bash
~techconative-weather-app> npm run dev
# or below for yarn
~techconative-weather-app> yarn dev
```

Once the development server starts, you will observe the following output in your terminal.

```bash
> techconative-weather-app@0.1.0 dev
> next dev

   ▲ Next.js 14.0.3
   - Local:        http://localhost:3000

 ✓ Ready in *.*s
```

The development server is now prepared to run on the browser through the `http://localhost:3000` URL.

### Commit the Code

Once you are done the code changes use the below code to commit your change.

```bash
~techconative-weather-app> git add .
```

Next, utilize the provided custom script to commit the formatted message to maintain the consistency.

```bash
~techconative-weather-app> npm run commit
# or below for yarn
~techconative-weather-app> yarn commit
```

You will now observe the question wizard below in your terminal.

```bash
> techconative-weather-app@0.1.0 commit
> git-cz

cz-cli@4.3.0, cz-customizable@7.0.0

All lines except first will be wrapped after 100 characters.
? Select the type of change that you're committing: (Use arrow keys)
❯ 🚀 BUILD       : Add or update regards to build process
  💚 CI          : Add or update regards to build process
  ✏️  DOCS        : Add or update documentation
  ✨ FEATURE     : Adding a new feature
  🩹 FIX         : Fixing a bug
  ♻️  REFACTOR    : Code change that neither fixes a bug nor adds a feature
  ⚡️ PERFORMANCE : Code change that improves performance
(Move up and down to reveal more choices)
```

Choose the code change type and press <kbd>Enter</kbd> to confirm. Utilize the <kbd>up</kbd> and <kbd>down</kbd> arrow keys to navigate through the options.

```bash
All lines except first will be wrapped after 100 characters.
? Select the type of change that you're committing: ✏️  DOCS      : Add or update documentation
? Write a SHORT, IMPERATIVE tense description of the change:

```

Input your commit message to explain the change. Press <kbd>Enter</kbd> to confirm.

> Ensure that the commit message is under 100 characters, not empty, and does not conclude with the period (`.`) character. Otherwise, an error will occur, and the commit will be disregarded.

```bash
All lines except first will be wrapped after 100 characters.
? Select the type of change that you're committing: ✏️  DOCS      : Add or update documentation
? Write a SHORT, IMPERATIVE tense description of the change:
 added husky feature details the README.md file

###--------------------------------------------------------###
:pencil2: DOCS: added husky feature details the README.md file
###--------------------------------------------------------###

? Are you sure you want to proceed with the commit above? (Yneh)

```

Review your commit message and confirm by pressing <kbd>Enter</kbd>. To skip the commit, input `No` and press <kbd>Enter</kbd>.

### Push to Remote

After successfully committing, execute the following command to push the changes from local to remote.

```bash
~techconative-weather-app> git push
```

Assuming there are no build errors, your changes will be pushed to the remote branch.

[cna-link]: https://github.com/vercel/next.js/tree/canary/packages/create-next-app
[eslint-link]: https://nextjs.org/docs/pages/building-your-application/configuring/eslint
[prettier-link]: https://nextjs.org/docs/pages/building-your-application/configuring/eslint#prettier
[typescript-link]: https://nextjs.org/docs/pages/building-your-application/configuring/typescript
[tailwind-link]: https://nextjs.org/docs/pages/building-your-application/styling/tailwind-css
[husky-link]: https://typicode.github.io/husky/
[commitlint-link]: https://commitlint.js.org/
