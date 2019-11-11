import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
declare var $: any;

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.less']
})
export class MenuBarComponent implements OnInit {

  public firstLookTitle: string;
  public featuresTitle: string;
  public imagesTitle: string;

  constructor(private router: Router) {
    this.router = router;
    this.firstLookTitle = 'En quelques mots';
    this.featuresTitle = 'Fonctionnalitées';
    this.imagesTitle = 'En image';
  }

  get selectedPage() {
    if (!_.isUndefined(this.router.url)) {
      console.log(this.router.url.replace('/', ''))
      return this.router.url.replace('/', '');
    }
  }

  ngOnInit() {
    $('.ui.dropdown.icon.item').dropdown();
  }

}
