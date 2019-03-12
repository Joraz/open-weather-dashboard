export interface CityWeather {
  coord: Coord;
  weather: Weather[];
  base?: string;
  main: Main;
  wind: Wind;
  clouds: Cloud;
  rain?: Required<Precipitation>;
  snow?: Required<Precipitation>;
  dt: UnixTimestamp;
  id: number;
  name: string;
}

export interface CityForecast {
  city: {
    id: number;
    name: string;
    coord: Coord;
    country: string;
  };
  cnt: number;
  list: Array<{
    dt: UnixTimestamp;
    main: Main;
    weather: Weather[];
    wind: Wind;
    clouds: Cloud;
    rain?: Precipitation;
    snow?: Precipitation;
    dt_txt?: UnixTimestamp | string;
  }>;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
  iconUrl?: string;
}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Cloud {
  all: number;
}

export interface Precipitation {
  '1h'?: number;
  '3h': number;
}

declare type UnixTimestamp = number;

export interface OpenWeatherGroupResponse {
  cnt: number;
  list: CityWeather[];
}
