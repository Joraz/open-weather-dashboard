export const environment = {
  production: false,
  openWeather:{
    /**
     * Replace this with your OpenWeather api key
     */
    apiKey:  undefined,
    baseUrl: 'http://api.openweathermap.org/data/2.5',
    endpoints: {
      getDataForGroup: '/group',
      fiveDayForecast: '/forecast'
    }
  },
  cities: {
    amsterdam: 2759794,
    cardiff: 2653822,
    paris: 6455259,
    dusseldorf: 2934246,
    bruges: 2800931
  }
};
