import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  apiEndpoint = environment.BRAVE_NEW_COIN_SERVICE;

  constructor(private http: HttpClient) { }

  getDigitalCurrency() {
    return this.http.get<any>(
      `${this.apiEndpoint}/prices?coin=btc`,
      {}
    );
  }
}
