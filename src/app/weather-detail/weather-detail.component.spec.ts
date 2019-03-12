import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WeatherDetailComponent } from './weather-detail.component';
import { fakeCityWeather } from '../test-fixtures/weather';
import { CapitalizePipe } from '../capitalize.pipe';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { WeatherForecastChartComponent } from '../weather-forecast-chart/weather-forecast-chart.component';

describe('WeatherDetailComponent', () => {
  let component: WeatherDetailComponent;
  let fixture: ComponentFixture<WeatherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, FontAwesomeModule],
      declarations: [
        WeatherDetailComponent,
        WeatherForecastComponent,
        WeatherForecastChartComponent,
        CapitalizePipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailComponent);
    component = fixture.componentInstance;
    component.weather = fakeCityWeather.list[0];
    component.isSelected = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays as expected', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('mat-card-title').textContent).toEqual('Amsterdam');
    expect(element.querySelector('mat-card-subtitle').textContent).toEqual('Light rain');
  });
});
