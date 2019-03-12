import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CityForecast } from 'src/app/models/weather.model';
import { OpenWeatherService } from 'src/app/open-weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html'
})
export class WeatherForecastComponent implements OnInit {
  @Input() public cityId: number;

  public cityForecast$: Observable<CityForecast>;

  constructor(private openWeatherService: OpenWeatherService) {}

  public ngOnInit(): void {
    this.cityForecast$ = this.openWeatherService.getFiveDayForecastForCity(
      this.cityId
    );
  }
}
