# Techconative Weather App

Hi! This assignment project serves as a demonstration of my proficiency and expertise in crafting a web application using **ReactJS** with a foundation built upon **Next.js** and its associated ecosystem.

The project revolves around creating a web application using Next.js with the primary objective of providing users with accurate and timely weather forecasts. Users will have the capability to search for specific locations or select predefined ones. The application will then fetch relevant weather data and present it in an accessible and user-friendly manner.

The implementation will leverage the capabilities of Next.js to ensure a seamless and efficient user experience, with a focus on responsiveness and real-time updates for weather information.

<br />

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
- **[Pages](#pages)**
- **[Components](#components)**
- **[Custom React Hooks](#custom-react-hooks)**
- **[Services](#services)**
- **[Utility Functions](#utility-functions)**

<br />

## Development Features

- [x] **Bootstrapped with [create-next-app][cna-link]** for React app development
- [x] **[ESLint][eslint-link] and [Prettier][prettier-link]** for code standard and formatting
- [x] **[Typescript][typescript-link]** for type-check
- [x] **[TailwindCSS][tailwind-link]** for styling
- [x] **[Husky][husky-link] Hook** for git pre-commit and pre-push validation
- [x] **[Commitlint][commitlint-link]** for commit-msg validation for consistency

<br />

## Script Commands

- <code>"dev": "next dev"</code> - to run the dev server
- <code>"start": "next start"</code> - to run the project for demo
- <code>"build": "next build"</code> - to build the project to prepare for launch
- <code>"lint": "next lint"</code> - to run the ESLint and ensure the clean coding
- <code>"prepare": "husky install"</code> - to ensure the husky install on node modules installation
- <code>"commit": "git-cz"</code> - to commit the customised message for consistency and easy to identify

<br />

## Husky Hooks

- <code>commit-msg</code> - to run the commit-lint to ensure the commit message format to maintain the consistency.
- <code>pre-commit</code> - to run the ESLint command and ensure the coding standard before committing the changes.
- <code>post-commit</code> - to run the build command and ensure the code quality and project stability before the code push.

<br />

## Pages

#### `Home` Page

This is the homepage of the application, implemented as a server-side page. It utilizes the `searchParams` prop to retrieve the coordinates of the selected location. The weather report is fetched using the `fetchWeatherReports` function and passed as props to the `Report` component.

```typescript
function Home({ searchParams }: HomePageProps): Promise<JSX.Element>;
```

<br />

## Components

#### `Navigator` Component

This component is employed to showcase the dialog button and overlay within the home page. The dialog overlay facilitates the rendering of a Google Map for selecting a location and obtaining coordinates to fetch the weather report. It does not requires any props.

#### `Map` Component

This component is responsible for displaying the Google Map within the Navigator component and acquiring the coordinates of the selected location.

#### `Report` Component

The `Report` component is designed to present the weather report. It relies on the [OpenWeather API Response][api-response-link] as a prop.

#### `BgOverlay` Component

This component is employed to display a background image determined by the climate and time. It mandates the following props:

```typescript
type BgOverlayProps = {
  climate: string;
  time: string;
};
```

#### `Matric` Component

This component is used to render the report points with respective icon, value and name. It requires below props.

```typescript
type Props = {
  name: string;
  icon: MatricIconProps["name"];
  unit: string;
  value: number | string;
};
```

#### `MetricIcon` Component

This component is employed to render an icon based on the provided props. It requires the following props:

```typescript
type MatricIconProps = {
  name:
    | "theremo-meter"
    | "speed-meter"
    | "air"
    | "fan-direction"
    | "eye"
    | "percent";
  size?: number;
};
```

#### `WeatherImage` Component

This component is utilized to display the climate indication image based on the provided props. It necessitates the following props:

```typescript
type WeatherImageProps = {
  climate: string;
  time: string;
};
```

#### `Place` Component

This component is employed to display the selected location name in the button and map title. Additionally, it renders two different place names for the mobile and desktop versions. It requires the following props:

```typescript
type PlaceType = {
  mobile: string;
  desktop: string;
};
type PlaceProps = {
  place?: PlaceType;
};
```

<br />

## Custom React Hooks

#### `useGetUserCoords` Custom Hook

This custom hook is designed to retrieve the current location coordinates (latitude and longitude) of the user's browser, utilizing the Google Geolocation API. The hook exports the following properties:

```typescript
const useGetUserCoords = () => {
  coords: CoordsType;
  isLoading: boolean;
  isError: boolean;
};
```

#### `useGoogleAPI` Custom Hook

This hook is crafted to utilize the Google Geocoder for obtaining place names. The hook exports the following method:

```typescript
const useGoogleAPI: () => {
  getPlaceNameByCoords: ({
    lat,
    lng,
  }: globalThis.google.maps.LatLngLiteral) => Promise<{
    desktop: string;
    mobile: string;
  }>;
};
```

The `getPlaceNameByCoords` is an asynchronous method that returns a Promise containing two versions of the place name for both desktop and mobile, determined by the provided coordinates.

#### `useURLCoords` Custom Hook

This custom hook is intended for obtaining and setting URL coordinate parameters to fetch data based on the URL in server-side pages. The hook exports the following methods:

```typescript
const useURLCoords: () => {
  getURLCoords: () => {
    latitude: string | null;
    longitude: string | null;
  };
  setURLCoords: (coords: CoordsType) => void;
};
```

The `getURLCoords` method returns the current values of latitude and longitude in the URL parameters. The `setURLCoords` method updates the values of latitude and longitude parameters in the URL.

<br />

## Services

#### `fetchWeatherReports` Service

This function is employed to retrieve weather reports based on the provided coordinates through the [OpenWeather API][open-weather-link]. It takes latitude and longitude as arguments and returns a Promise&lt;any&gt; ([API Response][api-response-link]).

```typescript
const fetchWeatherReports: ({
  latitude,
  longitude,
}: CoordsType) => Promise<any>;
```

<br />

## Utility Functions

#### `getCurrentDate` Function

The `getCurrentDate` function is employed to obtain the current date in the format `Friday, 8 Dec` for display in the weather report. The function has the following type:

```typescript
const getCurrentDate: () => string;
```

#### `getTimeOfDay` Function

The `getTimeOfDay` function is utilized to determine whether it is currently `day` or `night` based on the browser time for display in the report. The function has the following type:

```typescript
const getTimeOfDay: () => "day" | "night";
```

#### `getThemeByWeatherName` Function

The `getThemeByWeatherName` function is employed to obtain the weather climate theme, which dictates the background color and image of the `Report` component. This function takes the theme as an argument and returns one of the values from the following enumeration.

```typescript
const getThemeByWeatherName: (
  theme: string
) =>
  | "mist"
  | "few-clouds"
  | "overcast-clouds"
  | "broken-clouds"
  | "clouds"
  | "drizzle";
```

<br />

## Getting Started

### Fork the Repository

Fork the repository and generate a new branch from the main branch.

```bash
git clone https://github.com/seenivasanb/techconative-weather-app.git
```

### Install the Dependency

After cloning the project, navigate to the root directory `techconative-weather-app` in the terminal. Execute the following command to install the required node modules for running the project.

```bash
~ techconative-weather-app> npm install
# if you are using yarn
~ techconative-weather-app> yarn install
```

Make sure, you are installed the `npm` or `yarn` package in your local machine.

### Run the Project

Once the node modules are successfully installed, execute the following command to run the `NextJS` project in development mode.

```bash
~ techconative-weather-app> npm run dev
# if you are using yarn
~ techconative-weather-app> yarn dev
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
~ techconative-weather-app> git add .
```

Next, utilize the provided custom script to commit the formatted message to maintain the consistency.

```bash
~ techconative-weather-app> npm run commit
# if you are using yarn
~ techconative-weather-app> yarn commit
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
~ techconative-weather-app> git push
```

Assuming there are no build errors, your changes will be pushed to the remote branch.

[cna-link]: https://github.com/vercel/next.js/tree/canary/packages/create-next-app
[eslint-link]: https://nextjs.org/docs/pages/building-your-application/configuring/eslint
[prettier-link]: https://nextjs.org/docs/pages/building-your-application/configuring/eslint#prettier
[typescript-link]: https://nextjs.org/docs/pages/building-your-application/configuring/typescript
[tailwind-link]: https://nextjs.org/docs/pages/building-your-application/styling/tailwind-css
[husky-link]: https://typicode.github.io/husky/
[commitlint-link]: https://commitlint.js.org/
[api-response-link]: https://openweathermap.org/current#fields_json
[open-weather-link]: https://openweathermap.org/current#concept
