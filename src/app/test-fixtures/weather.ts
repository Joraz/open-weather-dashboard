import {
  CityForecast,
  OpenWeatherGroupResponse
} from '../models/weather.model';

export const fakeCityWeather: OpenWeatherGroupResponse = {
  cnt: 2,
  list: [
    {
      coord: {
        lon: 4.89,
        lat: 52.37
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        },
        {
          id: 301,
          main: 'Drizzle',
          description: 'drizzle',
          icon: '09d'
        }
      ],
      main: {
        temp: 8.01,
        pressure: 1010,
        humidity: 65,
        temp_min: 7,
        temp_max: 8.89
      },
      wind: {
        speed: 12.3,
        deg: 200
      },
      clouds: {
        all: 40
      },
      dt: 1552385396,
      id: 2759794,
      name: 'Amsterdam'
    },
    {
      coord: {
        lon: -3.18,
        lat: 51.48
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        },
        {
          id: 311,
          main: 'Drizzle',
          description: 'drizzle rain',
          icon: '09d'
        }
      ],
      main: {
        temp: 7.05,
        pressure: 1002,
        humidity: 87,
        temp_min: 4.44,
        temp_max: 10
      },
      wind: {
        speed: 8.7,
        deg: 290
      },
      clouds: {
        all: 92
      },
      dt: 1552385396,
      id: 2653822,
      name: 'Cardiff'
    }
  ]
};

export const fakeCityForecast: CityForecast = {
  cnt: 40,
  list: [
    {
      dt: 1552392000,
      main: {
        temp: 8.93,
        temp_min: 7.24,
        temp_max: 8.93,
        pressure: 1007.27,
        sea_level: 1007.27,
        grnd_level: 1007.36,
        humidity: 74
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 88
      },
      wind: {
        speed: 11.76,
        deg: 208
      },
      rain: {
        '3h': 0.0275
      },
      dt_txt: '2019-03-12 12:00:00'
    },
    {
      dt: 1552402800,
      main: {
        temp: 9.04,
        temp_min: 7.76,
        temp_max: 9.04,
        pressure: 1001.12,
        sea_level: 1001.12,
        grnd_level: 1001.19,
        humidity: 73
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 12.61,
        deg: 201.5
      },
      rain: {
        '3h': 0.235
      },
      dt_txt: '2019-03-12 15:00:00'
    },
    {
      dt: 1552413600,
      main: {
        temp: 8.7,
        temp_min: 7.85,
        temp_max: 8.7,
        pressure: 995.56,
        sea_level: 995.56,
        grnd_level: 995.46,
        humidity: 84
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 13.27,
        deg: 205.001
      },
      rain: {
        '3h': 2.1525
      },
      dt_txt: '2019-03-12 18:00:00'
    },
    {
      dt: 1552424400,
      main: {
        temp: 6.14,
        temp_min: 5.71,
        temp_max: 6.14,
        pressure: 999.34,
        sea_level: 999.34,
        grnd_level: 999.46,
        humidity: 94
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 64
      },
      wind: {
        speed: 10.68,
        deg: 266.002
      },
      rain: {
        '3h': 1.83
      },
      dt_txt: '2019-03-12 21:00:00'
    },
    {
      dt: 1552435200,
      main: {
        temp: 6.22,
        temp_min: 6.22,
        temp_max: 6.22,
        pressure: 999.42,
        sea_level: 999.42,
        grnd_level: 999.46,
        humidity: 91
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 11.78,
        deg: 246
      },
      rain: {
        '3h': 0.0925
      },
      dt_txt: '2019-03-13 00:00:00'
    },
    {
      dt: 1552446000,
      main: {
        temp: 6.8,
        temp_min: 6.8,
        temp_max: 6.8,
        pressure: 998.61,
        sea_level: 998.61,
        grnd_level: 998.67,
        humidity: 90
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 12.7,
        deg: 249.001
      },
      rain: {
        '3h': 1.275
      },
      dt_txt: '2019-03-13 03:00:00'
    },
    {
      dt: 1552456800,
      main: {
        temp: 6.81,
        temp_min: 6.81,
        temp_max: 6.81,
        pressure: 997.43,
        sea_level: 997.43,
        grnd_level: 997.55,
        humidity: 90
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 13.13,
        deg: 244.001
      },
      rain: {
        '3h': 0.05
      },
      dt_txt: '2019-03-13 06:00:00'
    },
    {
      dt: 1552467600,
      main: {
        temp: 6.38,
        temp_min: 6.38,
        temp_max: 6.38,
        pressure: 996.47,
        sea_level: 996.47,
        grnd_level: 996.63,
        humidity: 98
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 13.67,
        deg: 249.506
      },
      rain: {
        '3h': 2.13
      },
      dt_txt: '2019-03-13 09:00:00'
    },
    {
      dt: 1552478400,
      main: {
        temp: 7.41,
        temp_min: 7.41,
        temp_max: 7.41,
        pressure: 997.28,
        sea_level: 997.28,
        grnd_level: 997.39,
        humidity: 94
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 12.87,
        deg: 271.5
      },
      rain: {
        '3h': 2.57
      },
      dt_txt: '2019-03-13 12:00:00'
    },
    {
      dt: 1552489200,
      main: {
        temp: 7.77,
        temp_min: 7.77,
        temp_max: 7.77,
        pressure: 998.84,
        sea_level: 998.84,
        grnd_level: 999,
        humidity: 90
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 12.01,
        deg: 286.003
      },
      rain: {
        '3h': 0.675
      },
      dt_txt: '2019-03-13 15:00:00'
    },
    {
      dt: 1552500000,
      main: {
        temp: 7.43,
        temp_min: 7.43,
        temp_max: 7.43,
        pressure: 1001.31,
        sea_level: 1001.31,
        grnd_level: 1001.36,
        humidity: 87
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 12.97,
        deg: 297.005
      },
      rain: {
        '3h': 0.065
      },
      dt_txt: '2019-03-13 18:00:00'
    },
    {
      dt: 1552510800,
      main: {
        temp: 7.21,
        temp_min: 7.21,
        temp_max: 7.21,
        pressure: 1004.78,
        sea_level: 1004.78,
        grnd_level: 1004.91,
        humidity: 88
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 76
      },
      wind: {
        speed: 10.16,
        deg: 300
      },
      dt_txt: '2019-03-13 21:00:00'
    },
    {
      dt: 1552521600,
      main: {
        temp: 7.15,
        temp_min: 7.15,
        temp_max: 7.15,
        pressure: 1006.29,
        sea_level: 1006.29,
        grnd_level: 1006.37,
        humidity: 90
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 8.77,
        deg: 285.001
      },
      rain: {
        '3h': 0.055
      },
      dt_txt: '2019-03-14 00:00:00'
    },
    {
      dt: 1552532400,
      main: {
        temp: 6.51,
        temp_min: 6.51,
        temp_max: 6.51,
        pressure: 1005.36,
        sea_level: 1005.36,
        grnd_level: 1005.42,
        humidity: 89
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 8.61,
        deg: 265.5
      },
      rain: {
        '3h': 0.2
      },
      dt_txt: '2019-03-14 03:00:00'
    },
    {
      dt: 1552543200,
      main: {
        temp: 6.43,
        temp_min: 6.43,
        temp_max: 6.43,
        pressure: 1001.75,
        sea_level: 1001.75,
        grnd_level: 1001.82,
        humidity: 94
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 10.11,
        deg: 244.5
      },
      rain: {
        '3h': 1.28
      },
      dt_txt: '2019-03-14 06:00:00'
    },
    {
      dt: 1552554000,
      main: {
        temp: 7.65,
        temp_min: 7.65,
        temp_max: 7.65,
        pressure: 997.22,
        sea_level: 997.22,
        grnd_level: 997.24,
        humidity: 95
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 11.47,
        deg: 251.503
      },
      rain: {
        '3h': 5.005
      },
      dt_txt: '2019-03-14 09:00:00'
    },
    {
      dt: 1552564800,
      main: {
        temp: 9.13,
        temp_min: 9.13,
        temp_max: 9.13,
        pressure: 995.64,
        sea_level: 995.64,
        grnd_level: 995.66,
        humidity: 93
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 68
      },
      wind: {
        speed: 11.71,
        deg: 275.005
      },
      rain: {
        '3h': 3.035
      },
      dt_txt: '2019-03-14 12:00:00'
    },
    {
      dt: 1552575600,
      main: {
        temp: 8.74,
        temp_min: 8.74,
        temp_max: 8.74,
        pressure: 997.44,
        sea_level: 997.44,
        grnd_level: 997.57,
        humidity: 94
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 68
      },
      wind: {
        speed: 11.38,
        deg: 299.001
      },
      rain: {
        '3h': 0.79
      },
      dt_txt: '2019-03-14 15:00:00'
    },
    {
      dt: 1552586400,
      main: {
        temp: 7.59,
        temp_min: 7.59,
        temp_max: 7.59,
        pressure: 1000.76,
        sea_level: 1000.76,
        grnd_level: 1000.9,
        humidity: 90
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 10.33,
        deg: 300.506
      },
      dt_txt: '2019-03-14 18:00:00'
    },
    {
      dt: 1552597200,
      main: {
        temp: 7.54,
        temp_min: 7.54,
        temp_max: 7.54,
        pressure: 1004.07,
        sea_level: 1004.07,
        grnd_level: 1004.18,
        humidity: 89
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 9.3,
        deg: 299.503
      },
      dt_txt: '2019-03-14 21:00:00'
    },
    {
      dt: 1552608000,
      main: {
        temp: 7.34,
        temp_min: 7.34,
        temp_max: 7.34,
        pressure: 1006.84,
        sea_level: 1006.84,
        grnd_level: 1006.89,
        humidity: 91
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 7.96,
        deg: 291.522
      },
      dt_txt: '2019-03-15 00:00:00'
    },
    {
      dt: 1552618800,
      main: {
        temp: 7.04,
        temp_min: 7.04,
        temp_max: 7.04,
        pressure: 1008.15,
        sea_level: 1008.15,
        grnd_level: 1008.3,
        humidity: 91
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 88
      },
      wind: {
        speed: 6.9,
        deg: 280.501
      },
      dt_txt: '2019-03-15 03:00:00'
    },
    {
      dt: 1552629600,
      main: {
        temp: 6.48,
        temp_min: 6.48,
        temp_max: 6.48,
        pressure: 1008.22,
        sea_level: 1008.22,
        grnd_level: 1008.39,
        humidity: 93
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 80
      },
      wind: {
        speed: 5.56,
        deg: 254.504
      },
      rain: {
        '3h': 0.069999999999997
      },
      dt_txt: '2019-03-15 06:00:00'
    },
    {
      dt: 1552640400,
      main: {
        temp: 7.79,
        temp_min: 7.79,
        temp_max: 7.79,
        pressure: 1007.6,
        sea_level: 1007.6,
        grnd_level: 1007.64,
        humidity: 99
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 6.41,
        deg: 219.502
      },
      rain: {
        '3h': 0.62
      },
      dt_txt: '2019-03-15 09:00:00'
    },
    {
      dt: 1552651200,
      main: {
        temp: 10.56,
        temp_min: 10.56,
        temp_max: 10.56,
        pressure: 1007.69,
        sea_level: 1007.69,
        grnd_level: 1007.84,
        humidity: 95
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 80
      },
      wind: {
        speed: 10.07,
        deg: 258.501
      },
      rain: {
        '3h': 0.38
      },
      dt_txt: '2019-03-15 12:00:00'
    },
    {
      dt: 1552662000,
      main: {
        temp: 10.99,
        temp_min: 10.99,
        temp_max: 10.99,
        pressure: 1007.62,
        sea_level: 1007.62,
        grnd_level: 1007.73,
        humidity: 90
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 88
      },
      wind: {
        speed: 10.86,
        deg: 252.501
      },
      dt_txt: '2019-03-15 15:00:00'
    },
    {
      dt: 1552672800,
      main: {
        temp: 10.76,
        temp_min: 10.76,
        temp_max: 10.76,
        pressure: 1007.78,
        sea_level: 1007.78,
        grnd_level: 1007.75,
        humidity: 84
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 88
      },
      wind: {
        speed: 10.55,
        deg: 246.001
      },
      dt_txt: '2019-03-15 18:00:00'
    },
    {
      dt: 1552683600,
      main: {
        temp: 10.91,
        temp_min: 10.91,
        temp_max: 10.91,
        pressure: 1008.52,
        sea_level: 1008.52,
        grnd_level: 1008.62,
        humidity: 84
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 11.21,
        deg: 244.502
      },
      rain: {
        '3h': 0.010000000000002
      },
      dt_txt: '2019-03-15 21:00:00'
    },
    {
      dt: 1552694400,
      main: {
        temp: 10.57,
        temp_min: 10.57,
        temp_max: 10.57,
        pressure: 1009.22,
        sea_level: 1009.22,
        grnd_level: 1009.23,
        humidity: 82
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 88
      },
      wind: {
        speed: 11.51,
        deg: 242.003
      },
      rain: {
        '3h': 0.02
      },
      dt_txt: '2019-03-16 00:00:00'
    },
    {
      dt: 1552705200,
      main: {
        temp: 10.17,
        temp_min: 10.17,
        temp_max: 10.17,
        pressure: 1008.94,
        sea_level: 1008.94,
        grnd_level: 1009.03,
        humidity: 81
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 68
      },
      wind: {
        speed: 11.51,
        deg: 238.002
      },
      dt_txt: '2019-03-16 03:00:00'
    },
    {
      dt: 1552716000,
      main: {
        temp: 9.9,
        temp_min: 9.9,
        temp_max: 9.9,
        pressure: 1008.77,
        sea_level: 1008.77,
        grnd_level: 1008.82,
        humidity: 80
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 11.56,
        deg: 235
      },
      rain: {
        '3h': 0.030000000000001
      },
      dt_txt: '2019-03-16 06:00:00'
    },
    {
      dt: 1552726800,
      main: {
        temp: 10.29,
        temp_min: 10.29,
        temp_max: 10.29,
        pressure: 1008.87,
        sea_level: 1008.87,
        grnd_level: 1009.06,
        humidity: 80
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 11.85,
        deg: 233.503
      },
      rain: {
        '3h': 0.059999999999999
      },
      dt_txt: '2019-03-16 09:00:00'
    },
    {
      dt: 1552737600,
      main: {
        temp: 11.93,
        temp_min: 11.93,
        temp_max: 11.93,
        pressure: 1008.46,
        sea_level: 1008.46,
        grnd_level: 1008.58,
        humidity: 76
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 11.76,
        deg: 230.502
      },
      dt_txt: '2019-03-16 12:00:00'
    },
    {
      dt: 1552748400,
      main: {
        temp: 13.17,
        temp_min: 13.17,
        temp_max: 13.17,
        pressure: 1006.21,
        sea_level: 1006.21,
        grnd_level: 1006.31,
        humidity: 66
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 9.95,
        deg: 227
      },
      dt_txt: '2019-03-16 15:00:00'
    },
    {
      dt: 1552759200,
      main: {
        temp: 12.22,
        temp_min: 12.22,
        temp_max: 12.22,
        pressure: 1003.79,
        sea_level: 1003.79,
        grnd_level: 1003.75,
        humidity: 57
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 36
      },
      wind: {
        speed: 7.91,
        deg: 212.003
      },
      dt_txt: '2019-03-16 18:00:00'
    },
    {
      dt: 1552770000,
      main: {
        temp: 11.92,
        temp_min: 11.92,
        temp_max: 11.92,
        pressure: 1002.29,
        sea_level: 1002.29,
        grnd_level: 1002.43,
        humidity: 58
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 44
      },
      wind: {
        speed: 8.16,
        deg: 209.5
      },
      dt_txt: '2019-03-16 21:00:00'
    },
    {
      dt: 1552780800,
      main: {
        temp: 11.91,
        temp_min: 11.91,
        temp_max: 11.91,
        pressure: 1000.79,
        sea_level: 1000.79,
        grnd_level: 1000.75,
        humidity: 58
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }
      ],
      clouds: {
        all: 20
      },
      wind: {
        speed: 9.51,
        deg: 210.501
      },
      dt_txt: '2019-03-17 00:00:00'
    },
    {
      dt: 1552791600,
      main: {
        temp: 11.22,
        temp_min: 11.22,
        temp_max: 11.22,
        pressure: 999.91,
        sea_level: 999.91,
        grnd_level: 1000.02,
        humidity: 60
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 36
      },
      wind: {
        speed: 9.42,
        deg: 225.502
      },
      dt_txt: '2019-03-17 03:00:00'
    },
    {
      dt: 1552802400,
      main: {
        temp: 10.2,
        temp_min: 10.2,
        temp_max: 10.2,
        pressure: 999.63,
        sea_level: 999.63,
        grnd_level: 999.74,
        humidity: 62
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 68
      },
      wind: {
        speed: 8.97,
        deg: 220.505
      },
      dt_txt: '2019-03-17 06:00:00'
    },
    {
      dt: 1552813200,
      main: {
        temp: 11.43,
        temp_min: 11.43,
        temp_max: 11.43,
        pressure: 1000.2,
        sea_level: 1000.2,
        grnd_level: 1000.04,
        humidity: 66
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 7.9,
        deg: 227.006
      },
      rain: {
        '3h': 0.1
      },
      dt_txt: '2019-03-17 09:00:00'
    }
  ],
  city: {
    id: 2759794,
    name: 'Amsterdam',
    coord: {
      lat: 52.374,
      lon: 4.8897
    },
    country: 'NL'
  }
};
