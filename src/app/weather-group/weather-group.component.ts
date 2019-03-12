import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CityWeather } from 'src/app/models/weather.model';
import { environment } from 'src/environments/environment';
import { OpenWeatherService } from 'src/app/open-weather.service';

@Component({
  selector: 'app-weather-group',
  templateUrl: './weather-group.component.html',
  styleUrls: ['./weather-group.component.css']
})
export class WeatherGroupComponent implements OnInit {
  public weatherData$: Observable<CityWeather[]>;
  public selectedCityId: number = null;

  constructor(private openWeatherService: OpenWeatherService) {}

  public ngOnInit(): void {
    this.weatherData$ = this.openWeatherService.getWeatherDataForCities(Object.values(environment.cities));
  }

  public citySelected(cityId: number): void {
    this.selectedCityId = this.selectedCityId === cityId ? null : cityId;
  }
}
