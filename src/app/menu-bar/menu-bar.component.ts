import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { I18nService } from '../i18n.service';
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.less']
})
export class MenuBarComponent implements OnInit {

  public logo = require('../../assets/logo.png');
  public primitivoLogo = require('../../assets/primitivo.png');
  public primitivoLink = 'https://facebook.com';
  public facebookLink = 'https://facebook.com';
  public linkedinLink = 'https://linkedin.fr';
  public googlePlay = require('../../assets/google-play.png');
  public googlePlayLink = 'https://google.fr';
  public appStore = require('../../assets/app-store.png');
  public appStoreLink = 'https://apple.fr';
  public devOsudLink = 'https://me.dev-o-sud.fr';

  constructor(private router: Router, public i18nService: I18nService) {
  }

  get selectedPage() {
    if (!_.isUndefined(this.router.url)) {
      return this.router.url.replace('/', '');
    }
  }

  showMenu() {
    $('.ui.modal')
      .modal('show')
      ;
  }

  hideMenu() {
    $('.ui.modal')
      .modal('hide')
      ;
  }

  ngOnInit() {
  }

}
