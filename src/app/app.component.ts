import { Component, OnInit, ViewChild } from '@angular/core';
import { ConvertService } from './services/convert.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('tabGroup', { static: false }) tabGroup;
  constructor(private convertService: ConvertService) { }
  tabIndex = new FormControl();

  ngOnInit() {
    this.convertService.observable.subscribe(res => {
      this.tabIndex.setValue(0);
    });
  }
}
