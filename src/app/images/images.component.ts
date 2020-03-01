import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n.service';
import * as _ from 'lodash';
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.less']
})
export class ImagesComponent implements OnInit {

  public _ = _;
  public imageNames: any[];
  public images: any[] = [];
  public selectedImageIndex;
  public selectedImageLink: string;
  public selectedImageTitle: string;
  public selectedImageDescription: string;

  constructor(public i18nService: I18nService) {
    this.imageNames = ['bar-info', 'bar-commu', 'bar-services',  'discover','account'];
    this.imageNames.forEach(element => {
      this.images.push(require('../../assets/' + element + '.png'));
    });
  }

  setImage(index: number) {
    this.selectedImageTitle = this.i18nService.getByKey('images.' + this.imageNames[index] + '.title', 'fr');
    this.selectedImageDescription = this.i18nService.getByKey('images.' + this.imageNames[index] + '.description', 'fr');
    this.selectedImageIndex = index;
  }

  setCorrectTransition(index: number) {
    if (index !== this.selectedImageIndex) {
      if (index < this.selectedImageIndex) {
        $('#selected-image').transition('fade right out', '700', () => {
          this.setImage(index);
        }).transition('fade left in', '700ms');
      } else {
        $('#selected-image').transition('fade left out', '700', () => {
          this.setImage(index);
        }).transition('fade right in', '700ms');
      }
    }
  }

  ngOnInit() {
    this.setCorrectTransition(0);
  }

}
