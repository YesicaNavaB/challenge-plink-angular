import { Component, OnInit, Input } from '@angular/core';
import { ConvertService } from './../../services/convert.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  @Input() coin: Coin;
  crypto: boolean;

  constructor(private convertService: ConvertService) { }

  ngOnInit() {
    this.crypto = this.coin.crypto === '1';
  }

  convert() {
    this.convertService.sendMessage(this.coin.id_currency);
  }
}
