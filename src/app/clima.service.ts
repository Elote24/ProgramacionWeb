import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LocalizacionService } from './localizacion.service';
import { mergeMap, map } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  BaseUrl = 'http://www.7timer.info/bin/api.pl';
  constructor(private http: HttpClient, private localizacion: LocalizacionService) { }

  getClima() {
    const params = new HttpParams()
    return this.http.get(this.localizacion.BaseUrl, {
      params
    }).pipe(
      mergeMap(
        (info: any) => {
          const params = {
            lon: info.longitude,
            lat: info.latitude,
            product: 'civillight',
            output: 'json'
          };
          return this.http.get(this.BaseUrl, { params })
            .pipe(
              map(clima => ({ clima, info }))
            );
        }
      )
    );
  }
}
