import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  img = 'https://img.pixers.pics/pho_wat(s3:700/FO/51/29/55/37/700_FO51295537_7e3a633b8eeb62769dbc9dbf39c42c52.jpg,700,467,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,417,jpg)/fotomurales-amenazando-nubes-negras-en-el-cielo-gris-amenazaba-la-tormenta.jpg.jpg'
  title = 'weather';

  clima: {
    temp: string;
    main: string;
    description: string;
    temp_min: number;
    temp_max: number;
  }[];

  constructor(public weather: DataService) {

    this.clima = [];
  }


  ngOnInit(): void {

    this.weather.getInfo().subscribe((data) => {
      data.forEach((resultInfo: any) => {

        const cloud = {
          temp: resultInfo.temp,
          main: resultInfo.main,
          description: resultInfo.description,
          temp_min: resultInfo.temp_min,
          temp_max: resultInfo.temp_max,
        };
        this.clima.push(cloud);

      });
    });
  }

}



