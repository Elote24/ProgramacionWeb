import { Component, OnInit } from '@angular/core';
import { LocalizacionService } from '../localizacion.service'

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styleUrls: ['./localizacion.component.css']
})
export class LocalizacionComponent implements OnInit {

  private info;
  loaded = false;
  constructor(private localizacion: LocalizacionService) { }
  ngOnInit() {
    this.obtenerLocalizacion();
  }

  obtenerLocalizacion() {
    this.localizacion.getLocalizacion().subscribe(datos => {
      console.log(datos)
      this.info = datos;
      this.loaded = true;
    },
      error => {
        alert(error);
      });
  }

  ObtenHora() {
    let HoraA = new Date();
    let guardarH;
    guardarH = (HoraA.getHours() + ":" + HoraA.getMinutes());
    return guardarH;
  }
}

