import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { tokenName } from '@angular/compiler';

@Injectable()

export class InterceptorToken implements HttpInterceptor {

  tokenReq: any;

  constructor() { }

  intercept(
    req, next
  ) {
    this.tokenReq = req.clone({
      setHeaders: {
        'x-rapidapi-host': 'bravenewcoin-v1.p.rapidapi.com',
        'x-rapidapi-key': '7945704872msh114c172508acb06p1e72a2jsn079200953c54'
      }
    });
    return next.handle(this.tokenReq);
  }
}
