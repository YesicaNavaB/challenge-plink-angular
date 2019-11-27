import { Component, OnInit, ViewChild } from '@angular/core';
import { ConvertService } from './services/convert.service';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('tabGroup', { static: false }) tabGroup;
  constructor(private convertService: ConvertService, private translateService: TranslateService) {
    translateService.setDefaultLang('es');
    translateService.use('es');
  }
  tabIndex = new FormControl();

  ngOnInit() {
    this.convertService.observable.subscribe(res => {
      this.tabIndex.setValue(0);
    });
  }
}
