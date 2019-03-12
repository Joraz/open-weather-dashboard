import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WeatherGroupComponent } from './weather-group.component';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';
import { CapitalizePipe } from '../capitalize.pipe';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { WeatherForecastChartComponent } from '../weather-forecast-chart/weather-forecast-chart.component';
import { OpenWeatherService } from '../open-weather.service';
import { MockOpenWeatherService } from '../open-weather.service.mock';

describe('WeatherGroupComponent', () => {
  let component: WeatherGroupComponent;
  let fixture: ComponentFixture<WeatherGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatCardModule,
        FontAwesomeModule,
        HttpClientModule
      ],
      declarations: [
        WeatherGroupComponent,
        WeatherDetailComponent,
        WeatherForecastComponent,
        WeatherForecastChartComponent,
        CapitalizePipe
      ],
      providers: [
        { provide: OpenWeatherService, useClass: MockOpenWeatherService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display toolbar', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('mat-toolbar span').textContent).toEqual(
      'Current Weather Across Europe'
    );
  });

  it('should display weather cards', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('app-weather-detail').length).toEqual(2);
  });
});
