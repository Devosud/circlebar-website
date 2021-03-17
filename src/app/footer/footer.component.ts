import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n.service';
declare var require: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  public primitivoLogo = '../../assets/primitivo.png';
  public facebookLink = 'https://fb.me/CircleBarApp';
  public linkedinLink = 'https://www.linkedin.com/company/primitivofr/';
  public primitivoLink = 'https://primitivo.fr';
  public copyrightLink = 'https://me.dev-o-sud.fr';

  constructor(public i18nService: I18nService) { }

  ngOnInit() {
  }

}
