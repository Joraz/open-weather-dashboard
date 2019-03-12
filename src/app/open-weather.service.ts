import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import {
  CityWeather,
  OpenWeatherGroupResponse,
  CityForecast
} from 'src/app/models/weather.model';
import { NaiveCache } from 'src/app/util/naive-cache';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private readonly openWeather = environment.openWeather;

  private weatherCache = new NaiveCache<CityWeather[]>();
  private forecastCache = new NaiveCache<CityForecast>();

  constructor(private httpClient: HttpClient) {}

  public getWeatherDataForCities(cityIds: number[]): Observable<CityWeather[]> {
    const id = cityIds.join(',');
    const cachedWeather = this.weatherCache.get(id);
    if (cachedWeather) {
      return observableOf(cachedWeather);
    }

    const params: HttpParams = new HttpParams({
      fromObject: {
        appid: this.openWeather.apiKey,
        id,
        units: 'metric'
      }
    });

    const url = `${this.openWeather.baseUrl}${
      this.openWeather.endpoints.getDataForGroup
    }`;

    return this.httpClient.get<OpenWeatherGroupResponse>(url, { params }).pipe(
      map(response => response.list),
      tap(weatherArray => this.weatherCache.set(id, weatherArray))
    );
  }

  public getFiveDayForecastForCity(cityId: number): Observable<CityForecast> {
    const cachedForecast = this.forecastCache.get(cityId.toString());
    if (cachedForecast) {
      return observableOf(cachedForecast);
    }

    const params: HttpParams = new HttpParams({
      fromObject: {
        appid: this.openWeather.apiKey,
        id: cityId.toString(),
        units: 'metric'
      }
    });

    const url = `${this.openWeather.baseUrl}${
      this.openWeather.endpoints.fiveDayForecast
    }`;

    return this.httpClient
      .get<CityForecast>(url, { params })
      .pipe(
        tap(forecast => this.forecastCache.set(cityId.toString(), forecast))
      );
  }
}
