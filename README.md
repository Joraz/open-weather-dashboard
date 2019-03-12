# Open Weather Dashboard

### Running locally
Once you've cloned/downloaded the repo, run `npm install` or `yarn` depending on your package manager to install dependencies.

Once dependencies are installed, you'll need to provide your api key to access the OpenWeather api. Navigate to `src/environments/environment.ts` and replace `apiKey: undefined` with your key.

To run the application, use either `npm start`, `yarn start`, or `ng serve` if you have `angular-cli` installed globally. Navigate to `http://localhost:4200` in your browser to view the app.

### Tests
The app has a suite of unit tests, these can be run with `npm test` or `yarn test`. This will open up your default browser to display the results.

There are also e2e tests, which can be run with `npm run e2e` or `yarn e2e`.

### Potential improvements
There is currently only one e2e test due to time constraints. This could be improved with a full suite using protatractor, or another tool such as [CypressJS](https://www.cypress.io/).

The cache tool could be improved by adding automatic cache invalidation. This could prevent memory leaks. The caching could also be abstracted out into a HttpInterceptor, which would be a cleaner pattern that currently implemented.

The app provides a single chart for each city, showing the average temp for the next 5 days. More charts could be added in order to display more information.