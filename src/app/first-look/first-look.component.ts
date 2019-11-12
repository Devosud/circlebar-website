import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n.service';
declare var $: any;

@Component({
  selector: 'app-first-look',
  templateUrl: './first-look.component.html',
  styleUrls: ['./first-look.component.less']
})
export class FirstLookComponent implements OnInit {

  constructor(public i18nService: I18nService) {
    this.i18nService = i18nService;
  }

  ngOnInit() {
    $('#first-look-image').transition('scale in', '900ms');
    $('.ui.sticky')
      .sticky({
        context: '#first-look'
      })
      ;
  }
}
