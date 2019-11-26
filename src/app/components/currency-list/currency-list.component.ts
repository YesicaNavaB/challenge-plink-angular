import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from './../../services/currency';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  @Input() coins: Coin[];
  constructor(private curencyService: CurrencyService) { }

  ngOnInit() {
    this.curencyService.getDigitalCurrency().subscribe(response => {
      this.coins = response.prices;
      console.log(this.coins);
    });
  }
}
