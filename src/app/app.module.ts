import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeCurrencyComponent } from './components/change-currency/change-currency.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { CurrencyService } from '../app/services/currency';
import { InterceptorToken } from '../app/services/interceptor-token';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CurrencyComponent } from './components/currency/currency.component';


@NgModule({
  declarations: [AppComponent, ChangeCurrencyComponent, CurrencyListComponent, CurrencyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [
    CurrencyService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: InterceptorToken
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
