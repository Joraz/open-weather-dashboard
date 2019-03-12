import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatExpansionModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import 'chart.js';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherForecastChartComponent } from './weather-forecast-chart/weather-forecast-chart.component';
import { WeatherGroupComponent } from './weather-group/weather-group.component';
import { OpenWeatherService } from './open-weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,
    WeatherForecastComponent,
    WeatherForecastChartComponent,
    WeatherGroupComponent,
    CapitalizePipe
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,

    // Material modules
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,

    // Others
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [OpenWeatherService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
