import { Component, OnInit, AfterViewInit } from '@angular/core';
import { I18nService } from '../i18n.service';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements AfterViewInit {

  public isFormValid = false;

  constructor(public i18nService: I18nService) { }

  public validateForm() {
    if ($('.ui.form').form('is valid')) {
      this.isFormValid = true;
    }
  }

  ngAfterViewInit() {
    $('#contact').transition('fade right in', '900ms');
    $('.ui.form')
      .form({
        fields: {
          firstName: {
            identifier: 'firstName',
            rules: [
              {
                type: 'empty',
                prompt: this.i18nService.getByKey('contact.validation.first-name', 'fr')
              }
            ]
          },
          email: {
            identifier: 'email',
            rules: [
              {
                type: 'email',
                prompt: this.i18nService.getByKey('contact.validation.email', 'fr')
              }
            ]
          },
          subject: {
            identifier: 'subject',
            rules: [
              {
                type: 'empty',
                prompt: this.i18nService.getByKey('contact.validation.subject', 'fr')
              }
            ]
          },
          message: {
            identifier: 'message',
            rules: [
              {
                type: 'empty',
                prompt: this.i18nService.getByKey('contact.validation.message', 'fr')
              }
            ]
          }
        },
        inline: true,
        on: 'blur'
      })
      ;
  }

}
