import { Observable, of as observableOf } from 'rxjs';

import { CityWeather, CityForecast } from 'src/app/models/weather.model';
import { fakeCityWeather, fakeCityForecast } from './test-fixtures/weather';

export class MockOpenWeatherService {
  public getWeatherDataForCities(cityIds: number[]): Observable<CityWeather[]> {
    return observableOf<CityWeather[]>(fakeCityWeather.list);
  }

  public getFiveDayForecastForCity(cityId: number): Observable<CityForecast> {
    return observableOf<CityForecast>(fakeCityForecast);
  }
}
