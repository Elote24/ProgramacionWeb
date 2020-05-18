import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../clima.service'

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  climaHoy;
  loaded = false;
  constructor(private clima: ClimaService) {
  }
  ngOnInit() {
    this.obtenerClima();
  }

  obtenerClima() {
    this.clima.getClima().subscribe(datos => {
      this.climaHoy = datos.clima;
      this.loaded = true;
    },
      error => {
        alert(error);
      });
  }

  obtenerdia(fecha) {
    var parts = fecha.split('/');
    var date = new Date(parts[2], parts[1] - 1, parts[0]);
    var weekdays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    var weekday = weekdays[date.getDay()];
    return weekday;
  };

  formatoFecha(f) {
    let n = f.toString();
    return (n.charAt(6) + n.charAt(7) + "/" + n.charAt(4) + n.charAt(5) + "/" + n.charAt(0) + n.charAt(1) + n.charAt(2) + n.charAt(3));
  }


  obtenerimagen(weather) {
    if (weather == 'clear') {
      return 'https://www.pinclipart.com/picdir/big/76-762854_album-imagenes-de-clima-soleado-animado-clipart.png';
    }
    if (weather == 'cloudy') {
      return 'https://image.flaticon.com/icons/svg/1163/1163624.svg';
    }
    if (weather == 'rain') {
      return 'https://image.flaticon.com/icons/png/512/1959/1959342.png';
    }
    if (weather == 'pcloudy') {
      return 'https://image.flaticon.com/icons/svg/899/899683.svg'
    }
    if (weather == 'snow') {
      return 'https://image.flaticon.com/icons/svg/2834/2834547.svg';
    }
    if (weather == 'thunderstorm') {
      return 'https://image.flaticon.com/icons/svg/2698/2698225.svg';
    }
    if (weather == 'thunderstorm with rain') {
      return 'https://image.flaticon.com/icons/svg/1146/1146860.svg';
    }
    if (weather == 'lightrain') {
      return 'https://image.flaticon.com/icons/svg/494/494463.svg';
    }
    if (weather == 'ishower') {
      return 'https://image.flaticon.com/icons/svg/2910/2910202.svg';
    }
    if (weather == 'mcloudy') {
      return 'https://image.flaticon.com/icons/svg/899/899681.svg';
    }
  }
}
