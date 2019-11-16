import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n.service';
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-first-look',
  templateUrl: './first-look.component.html',
  styleUrls: ['./first-look.component.less']
})
export class FirstLookComponent implements OnInit {

  public googlePlay = require('../../assets/google-play.png');
  public appStore = require('../../assets/google-play.png');
  public firstImage = require('../../assets/first-page.png');

  constructor(public i18nService: I18nService) {
    this.i18nService = i18nService;
  }

  ngOnInit() {
    $('#first-look-image').transition('scale in', '900ms');
    $('.ui.sticky')
      .sticky({
        context: '#first-look-image',
        offset: 60,
        observeChanges: true,
        silent: true
      }, 2000)
      ;
  }
}
