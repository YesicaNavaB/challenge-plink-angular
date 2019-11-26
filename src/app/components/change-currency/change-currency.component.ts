import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from '../../services/currency';

@Component({
  selector: 'app-change-currency',
  templateUrl: './change-currency.component.html',
  styleUrls: ['./change-currency.component.scss']
})
export class ChangeCurrencyComponent implements OnInit {
  @Input() coins: Coin[];
  constructor(private curencyService: CurrencyService) { }

  ngOnInit() {
    this.curencyService.getDigitalCurrency().subscribe(response => {
      this.coins = response.prices;
    });
  }
}
