import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n.service';
import * as _ from 'lodash';
declare var $: any;

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.less']
})
export class ImagesComponent implements OnInit {

  public images: any[];
  public selectedImageIndex;
  public selectedImageLink: string;
  public selectedImageTitle: string;
  public selectedImageDescription: string;

  constructor(private i18nService: I18nService) {
    this.images = ['account', 'bar-commu', 'bar-info', 'bar-services', 'discover'];
  }

  setImage(index: number) {
    this.setCorrectTransition(index);
    this.selectedImageIndex = index;
    this.selectedImageLink = '../../assets/' + this.images[index] + '.png';
    this.selectedImageTitle = this.i18nService.getByKey('images.' + this.images[index] + '.title', 'fr');
    this.selectedImageDescription = this.i18nService.getByKey('images.' + this.images[index] + '.description', 'fr');
  }

  setCorrectTransition(index: number) {
    if (index < this.selectedImageIndex) {
      $('#selected-image').transition('fade left in', '900ms');
    } else {
      $('#selected-image').transition('fade right in', '900ms');
    }
  }

  ngOnInit() {
    this.setImage(0);
  }

}
