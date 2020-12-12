import { Component, OnInit, AfterViewInit } from '@angular/core';
import { I18nService } from '../i18n.service';
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-first-look',
  templateUrl: './first-look.component.html',
  styleUrls: ['./first-look.component.less']
})
export class FirstLookComponent implements AfterViewInit {

  public googlePlay = '../../assets/google-play.png';
  public appStore = '../../assets/app-store.png';
  public firstImage = '../../assets/first-page.png';

  constructor(public i18nService: I18nService) {
    this.i18nService = i18nService;
  }

  ngAfterViewInit() {
    $('#first-look-image').transition('scale in', '900ms');
  }

}
