import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from './interfaces/weather';
import {
  LoginResponse,
  RegisterResponse,
  UserInterface,
  UserRegisterInterface,
} from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getCurrent(lat: number, lon: number): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      `${this.apiServerUrl}/weather/current`,
      {
        params: {
          latitude: lat.toString(),
          longitude: lon.toString(),
        },
      },
    );
  }

  public login(user: UserInterface): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiServerUrl}/auth/login`,
      user,
    );
  }

  public register(user: UserRegisterInterface): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${this.apiServerUrl}/auth/register`,
      user,
    );
  }

  public isTokenValid(token: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.apiServerUrl}/auth/validate?token=${token}`,
    );
  }
}
