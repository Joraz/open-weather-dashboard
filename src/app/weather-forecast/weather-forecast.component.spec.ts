import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';

import { WeatherForecastComponent } from './weather-forecast.component';
import { WeatherForecastChartComponent } from '../weather-forecast-chart/weather-forecast-chart.component';
import { OpenWeatherService } from '../open-weather.service';
import { MockOpenWeatherService } from '../open-weather.service.mock';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, HttpClientModule],
      declarations: [WeatherForecastComponent, WeatherForecastChartComponent],
      providers: [
        { provide: OpenWeatherService, useClass: MockOpenWeatherService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display as expected', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('mat-card-subtitle').textContent).toEqual('5-Day Forecast');
    expect(element.querySelector('app-weather-forecast-chart')).toBeTruthy();
  })
});
