import { Component, Input, OnChanges } from '@angular/core';
import { faWind, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

import { CityWeather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css'],
})
export class WeatherDetailComponent implements OnChanges {
  @Input() public weather: CityWeather;

  @Input() public isSelected: boolean;

  public icons = {
    wind: faWind,
    temp: faThermometerHalf
  };

  public ngOnChanges(): void {
    if (this.weather) {
      this.setWeatherIcon();
    }
  }

  private setWeatherIcon(): void {
    const weather = this.weather.weather[0];
    const { icon } = weather;

    this.weather.weather[0].iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
  }
}
