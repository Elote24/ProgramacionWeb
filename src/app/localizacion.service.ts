import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {
  BaseUrl = 'http://api.ipstack.com/check?access_key=6e9dc139b6b1ac0a2f9ddf44af32a012';

  constructor(private http: HttpClient) { }

  getLocalizacion() {
    return this.http.get(this.BaseUrl);
  }
}
