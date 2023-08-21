

# Weather App

Welcome to the documentation of our Weather App! This README will provide all the necessary information to understand, install, and use the application. The app has been developed using TypeScript, React, and Vite.

## App Description

The Weather App is an application that allows users to get detailed weather information for a specific location. Users can search for a particular city and view current and future weather forecasts. The app utilizes third-party APIs to retrieve weather data, in particular Geocoding API ( https://openweathermap.org/api/geocoding-api ) and 3-hour Forecast 5 days ( https://openweathermap.org/forecast5 )

## System Requirements

Before proceeding with the installation, make sure you have the following prerequisites installed on your system:

* Node.js: Vite is built on Node.js, so you need to ensure you have Node.js installed on your system. You can download the latest version of Node.js from the official website: https://nodejs.org/.

* npm / Yarn: Vite uses npm (Node Package Manager) or Yarn as the package manager to install dependencies and run commands. npm is usually installed automatically with Node.js. However, you can also use Yarn if you prefer. You can install Yarn by following the instructions on the official website: https://yarnpkg.com/.

## Installation

1. Clone the repository from the [https://github.com/369-Palma/weather_app_ts.git](https://github.com/369-Palma/weather_app_ts.git).
2. Navigate to the project's main directory through your terminal.
3. Run the `npm i` command to install the necessary dependencies.
4. Run the `npm run dev` command to start the application locally.
5. Open your browser and go to [http://localhost:5173/](http://localhost:5173/) to view the app.

## API Configuration

The Weather App uses third-party APIs to retrieve weather data. To properly configure the APIs, follow these steps:

1. Create an account on [Weather API](https://home.openweathermap.org/users/sign_up) and obtain an API key.
2. In the project, locate the `src/config.ts` file and insert your API key into the designated variable.

```typescript
// src/config.ts

export const API_KEY = 'INSERT_YOUR_API_KEY_HERE';
```

## Project Structure

The project structure is organized as follows:

```
weather-app/
├── public/
├── src/
│   ├── assets/
        |   ├── types
│   ├── components/
│   ├── hooks/
│   ├── index.css
│   ├── App.tsx
│   ├── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

- **`public/`**: Contains publicly accessible static files.
- **`assets/types`**: Contains a file with all types defined.
- **`src/components/`**: Contains reusable React components of the app.
- **`src/hooks`**: Contains files handling API calls.
- **`src/index.css`**: Contains the app's style sheets.
- **`src/App.tsx`**: The main component of the application.
- **`src/main.tsx`**: The entry point of the app.
- **`package.json`**: Dependency and script configuration file.
- **`tsconfig.json`**: TypeScript configuration file.

## Contact

For questions, issues, or suggestions, you can reach mes at [palmaiacobelli92@gmail.com](mailto:palmaiacobelli92@mail.com).

---

Thank you for choosing the Weather App! We hope you find this documentation helpful to get started with the application. Happy weather exploration! 🌦️
