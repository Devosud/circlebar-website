import { Component, OnInit, AfterViewInit } from '@angular/core';
import { I18nService } from '../i18n.service';
import * as _ from 'lodash';
declare var $: any;

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.less']
})
export class ImagesComponent implements OnInit {

  public imageNames: any[];
  public images: any[] = [];
  public selectedImageIndex: number;
  public selectedImageLink: string;
  public selectedImageTitle: string;
  public selectedImageDescription: string;

  constructor(public i18nService: I18nService) {
    this.imageNames = ['bar-info', 'bar-commu', 'bar-services', 'account', 'discover'];
  }

  setImage(index: number) {
    this.setCorrectTransition(index);
    this.selectedImageIndex = index;
    this.selectedImageLink = require('../../assets/' + this.imageNames[index] + '.png');
    this.selectedImageTitle = this.i18nService.getByKey('images.' + this.imageNames[index] + '.title', 'fr');
    this.selectedImageDescription = this.i18nService.getByKey('images.' + this.imageNames[index] + '.description', 'fr');
  }

  setCorrectTransition(index: number) {
    if (index !== this.selectedImageIndex) {
      if (index < this.selectedImageIndex) {
        $('#selected-image').transition('fade left in', '900ms');
      } else {
        $('#selected-image').transition('fade right in', '900ms');
      }
    }
  }

  ngOnInit() {
    this.setImage(0);
  }

}
