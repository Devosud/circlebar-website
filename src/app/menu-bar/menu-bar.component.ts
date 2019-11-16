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

  public googlePlay = require('../../assets/google-play.png');
  public appStore = require('../../assets/app-store.png');

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
