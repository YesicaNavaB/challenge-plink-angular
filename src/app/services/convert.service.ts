import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConvertService {
  private subject = new Subject<any>();
  public observable = this.subject.asObservable();

  constructor() { }

  sendMessage(idCrypto: any) {
    this.subject.next(idCrypto);
  }
}
