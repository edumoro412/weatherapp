import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './weather-service';
import { HttpErrorResponse } from '@angular/common/http';
import { WeatherResponse } from './interfaces/weather';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'weatherapp';

  weatherResponse: WeatherResponse | undefined;

  constructor(private weatherService: WeatherService) {}
}
