import { TestBed } from '@angular/core/testing';

import { OpenWeatherService } from './open-weather.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { fakeCityForecast, fakeCityWeather } from './test-fixtures/weather';

describe('OpenWeatherService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);
    expect(service).toBeTruthy();
  });

  it('getWeatherDataForCities() should call api endpoint', () => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);

    service.getWeatherDataForCities([1, 2, 3]).subscribe(data => {
      expect(data).toEqual(fakeCityWeather.list);
    });

    const req = httpTestingController.expectOne(
      req =>
        req.method === 'GET' &&
        req.url === 'http://api.openweathermap.org/data/2.5/group' &&
        req.params.get('id') === '1,2,3'
    );
    req.flush(fakeCityWeather);

    httpTestingController.verify();
  });

  it('getFiveDayForecastForCity() should call api endpoint', () => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);

    service.getFiveDayForecastForCity(1).subscribe(data => {
      expect(data).toEqual(fakeCityForecast);
    });

    const req = httpTestingController.expectOne(
      req =>
        req.method === 'GET' &&
        req.url === 'http://api.openweathermap.org/data/2.5/forecast' &&
        req.params.get('id') === '1'
    );
    req.flush(fakeCityForecast);

    httpTestingController.verify();
  });
});
