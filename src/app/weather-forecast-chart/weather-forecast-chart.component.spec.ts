import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastChartComponent } from './weather-forecast-chart.component';
import { fakeCityForecast } from '../test-fixtures/weather';

describe('WeatherForecastChartComponent', () => {
  let component: WeatherForecastChartComponent;
  let fixture: ComponentFixture<WeatherForecastChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForecastChartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastChartComponent);
    component = fixture.componentInstance;
    component.forecast = fakeCityForecast;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display chart', () => {
    expect((fixture.nativeElement as HTMLElement).querySelector('canvas')).toBeTruthy();
  });
});
