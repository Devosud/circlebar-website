import { Component, AfterViewInit } from '@angular/core';
import { I18nService } from '../i18n.service';
declare var $: any;

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.less']
})
export class FeaturesComponent implements AfterViewInit {

  public features: any[];

  constructor(public i18nService: I18nService) {
    this.features = [
      {
        name: 'bar-selection',
        icon: 'red fire'
      },
      {
        name: 'promotions',
        icon: 'blue percent'
      },
      {
        name: 'rendez-vous',
        icon: 'green users'
      },
      {
        name: 'community',
        icon: 'purple american sign language interpreting'
      },
      {
        name: 'be-notify',
        icon: 'bell'
      },
      {
        name: 'favorite-bars',
        icon: 'yellow star'
      }
    ];

  }

  ngAfterViewInit() {
    $('#bar-selection').transition('fade right in', '900ms');
    $('#promotions').transition('fade left in', '900ms');
    $('#rendez-vous').transition('fade right in', '900ms');
    $('#community').transition('fade left in', '900ms');
    $('#be-notify').transition('fade right in', '900ms');
    $('#favorite-bars').transition('fade left in', '900ms');
  }

}
