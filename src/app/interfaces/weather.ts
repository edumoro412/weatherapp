export interface CurrentWeatherType {
  temperature_2m: number;
  apparent_temperature: number;
  wind_speed_10m: number;
  weather_code: number;
  relative_humidity_2m: number; //Porcentaje de humedad
  is_day: number; //Para saber 1 si es de dia 0 si es de noche
  precipitation: number;
  snowfall: number;
  cloud_cover: number;
}

export interface HourlyWeather {
  time: string[];
  precipitation: number[];
  precipitation_probability: number[];
}
export interface WeatherResponse {
  latitude: number;
  longitude: number;
  current: CurrentWeatherType;
  hourly: HourlyWeather;
}
