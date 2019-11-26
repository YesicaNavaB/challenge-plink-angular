import { Component, OnInit, Input } from '@angular/core';
// import { CurrencyService } from './../../services/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  @Input() coin: Coin;


  constructor() { }

  ngOnInit() {
    console.log(this.coin);
  }

}
