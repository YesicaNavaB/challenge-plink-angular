import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from './../../services/currency';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  @Input() coins: Coin[];
  visibles: Coin[];
  limit = 20;
  maximum = 20;

  constructor(private curencyService: CurrencyService) { }

  ngOnInit() {
    this.curencyService.getDigitalCurrency().subscribe(response => {
      this.coins = response.prices;
      this.visibles = this.coins.slice(0, this.limit);
    });
  }

  onScrollDown() {
    this.maximum += this.limit;
    this.visibles = this.visibles.concat(this.coins.slice(this.maximum - this.limit, this.maximum));
  }
}
