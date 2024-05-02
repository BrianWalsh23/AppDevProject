import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey='57567aaf05msh26b2886daaad672p197badjsn0fbe46fb7d4d';
  private apiUrl='https://the-weather-api.p.rapidapi.com/api/weather';

  constructor(private http:HttpClient) { }


searchWeather(city: string): Observable<any> {
  const headers = new HttpHeaders()
    .set("X-RapidAPI-Key", this.apiKey)
    .set("X-RapidAPI-Host", "the-weather-api.p.rapidapi.com");

  const option = { headers };

  return this.http.get(`${this.apiUrl}/${city}`, option);
  }

}
