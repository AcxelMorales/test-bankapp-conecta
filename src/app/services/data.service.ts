import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

import { ICuenta } from '../models/ICuenta';
import { ISaldos } from '../models/ISaldos';
import { ITarjeta } from '../models/ITarjeta';
import { IMovimientos } from '../models/IMovimientos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'https://api.sheety.co/';

  constructor(private http: HttpClient) { }

  getCuenta(): Observable<ICuenta[]> {
    return this.http.get<ICuenta[]>(`${this.url}/7ce411a1-17b6-41e5-b67c-55b3ac5df463`);
  }

  getSaldos(): Observable<ISaldos[]> {
    return this.http.get<ISaldos[]>(`${this.url}/fed17b86-497b-4a6e-9388-f38a495dbd43`);
  }

  getTarjetas(): Observable<ITarjeta[]> {
    return this.http.get<ITarjeta[]>(`${this.url}/3d6a976a-42d3-405f-b7fa-6959f51c2ff3`);
  }

  getMovimientos(): Observable<IMovimientos[]> {
    return this.http.get<IMovimientos[]>(`${this.url}/372fdc0a-99c0-47de-bae0-ed2b856cce62`);
  }

}
