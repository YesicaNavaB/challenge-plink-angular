import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from '../../services/currency';
import { ConvertService } from '../../services/convert.service';
@Component({
  selector: 'app-change-currency',
  templateUrl: './change-currency.component.html',
  styleUrls: ['./change-currency.component.scss']
})
export class ChangeCurrencyComponent implements OnInit {
  @Input() coins: Coin[];
  changeValue = 0;
  to = 'USD';
  from = 'BTC';
  quantity = 0;

  constructor(private curencyService: CurrencyService, private convertService: ConvertService) { }

  ngOnInit() {
    this.curencyService.getDigitalCurrency().subscribe(response => {
      this.coins = response.prices;
      this.coins.push({
        id_currency: 'BTC',
        name: 'Bitcoin',
        price: '1',
        crypto: '1'
      });
    });

    this.convertService.observable.subscribe(res => {
      this.to = 'BTC';
      this.from = res;
      this.changeValue = 1;
      this.convert(1, 'BTC', res);

    });
  }
  valueChange() {
    if (this.changeValue === 0) {
      return this.quantity = 0;
    }
    this.convert(this.changeValue, this.from, this.to);
  }

  changeSelect() {
    const toChange = this.to;
    const fromChange = this.from;
    this.to = fromChange;
    this.from = toChange;
    if (this.changeValue === 0) {
      return this.quantity = 0;
    }
    this.valueChange();
  }

  convert(cant: number, from: string, to: string) {
    this.curencyService.convert(cant, from, to)
      .subscribe(res => {
        if (res.success) {
          this.quantity = res.to_quantity;
        }
      });
  }

  onKey(id) {
    if (this.changeValue === 0 || this.changeValue === null) {
      return this.quantity = 0;
    }
    this.convert(id, this.from, this.to);
  }
}
