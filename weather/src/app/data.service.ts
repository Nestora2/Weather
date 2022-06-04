import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<any>(
      'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=13dc7b5fa5931e769c3cba13b5aee73d'
    );

  }

}
