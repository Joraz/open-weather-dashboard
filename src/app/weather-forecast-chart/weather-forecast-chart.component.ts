import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';
import { Chart } from 'chart.js';
import { format, isToday } from 'date-fns';

import { CityForecast } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-forecast-chart',
  templateUrl: './weather-forecast-chart.component.html'
})
export class WeatherForecastChartComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;

  @Input() forecast: CityForecast;

  public chart: Chart;

  public ngAfterViewInit(): void {
    const ctx = (this.canvas.nativeElement as HTMLCanvasElement).getContext(
      '2d'
    );

    // We want to display the average temp for each day past today
    const temps: Record<string, number[]> = {};

    this.forecast.list.forEach(l => {
      const listDate = new Date(l.dt * 1000);
      // Don't include results from today
      if (isToday(listDate)) {
        return;
      }

      const key = format(listDate, 'YYYY-MM-DD');
      if (!temps[key]) {
        temps[key] = [];
      }

      temps[key].push(l.main.temp);
    });

    const labels = Object.keys(temps).map(k => {
      const date = new Date(k);
      return format(date, 'dd Do');
    });

    const data: number[] = [];
    Object.values(temps).forEach(v => {
      const total = v.reduce((acc, current) => {
        return (acc += current);
      }, 0);
      const avg = parseFloat((total / v.length).toFixed(2));
      data.push(avg);
    });

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: 'rgba(158, 47, 178, 0.5)'
          }
        ]
      },
      options: {
        responsive: false,
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: false
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Average Temp in Celsius'
              }
            }
          ]
        },
        legend: { display: false }
      }
    });
  }
}
