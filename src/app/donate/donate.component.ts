import { Component, AfterViewInit } from '@angular/core';
import { I18nService } from '../i18n.service';
declare var $: any;

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.less']
})
export class DonateComponent implements AfterViewInit {

  constructor(public i18nService: I18nService){}

  ngAfterViewInit() {
    $('#donate-text').transition('fade in', '900ms');
    $('#donate .button').transition({
      animation : 'bounce',
      reverse   : 'auto',
      interval  : 300
    });
  }

}
