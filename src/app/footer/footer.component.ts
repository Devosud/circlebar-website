import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n.service';
declare var require: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  public primitivoLogo = require('../../assets/primitivo.png');
  public facebookLink = 'https://facebook.com';
  public linkedinLink = 'https://linkedin.fr';
  public primitivoLink = 'https://primitivo.fr';
  public devOsudLink = 'https://me.dev-o-sud.fr';

  constructor(public i18nService: I18nService) { }

  ngOnInit() {
  }

}
