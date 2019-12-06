import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class I18nService {
  private i18nData = {
    fr: {
      'ui.nav.team': 'L\'équipe',
      'ui.nav.images': 'Images',
      'ui.nav.contact': 'Contact',
      'ui.nav.legal-notices': 'Mentions légales',
      'ui.nav.follow': 'Nous suivre : ',
      'ui.nav.donate': 'Donner',
      'ui.first-look.title': 'CircleBar,',
      'ui.first-look.description': 'le premier réseau social 100% bar',
      'ui.features.bar-selection.title': 'Une sélection unique',
      'ui.features.bar-selection.description': 'Accède à une large sélection de bar situés dans ta ville',
      'ui.features.promotions.title': 'Des promotions',
      'ui.features.promotions.description': 'Reçois des promotions exclusives de tes bars favoris',
      'ui.features.rendez-vous.title': 'Rendez-vous avec tes potes',
      'ui.features.rendez-vous.description': 'Organise des soirées directement sur l\'application',
      'ui.features.community.title': 'Une grande communauté',
      'ui.features.community.description': 'Rejoins une commaunauté active, toujours prête à proposer des redez-vous pour animer ta soirée',
      'ui.features.be-notify.title': 'Des notifs en temps réels',
      'ui.features.be-notify.description':
        'Sois notifié(e) en temps réel des happy-hours et des horraires d\'ouverture de n\'importe quel bar',
      'ui.features.favorite-bars.title': 'Les favoris',
      'ui.features.favorite-bars.description': 'Ajoute tes bars préférés à ta liste de favoris pour pouvoir les retrouver facilement',
      'ui.images.account.title': 'Compte',
      'ui.images.account.description':
        'Tu peux directement créer ton compte ou bien si tu préfères choisir de te connecter avec ton compte Facebook ou encore Google',
      'ui.images.bar-commu.title': 'Communauté',
      'ui.images.bar-commu.description':
        'Tu peux regarder sur la page de ton bar préféré les soirées organisées par les autres utilisateurs',
      'ui.images.bar-info.title': 'Infos',
      'ui.images.bar-info.description':
        'Les infos essentielles du bar sont facilements trouvables comme sa localisation ou encore ses horraires d\'ouverture',
      'ui.images.bar-services.title': 'Services',
      'ui.images.bar-services.description':
        'Un large choix de service est proposé pour par exemple de permettre de laisser un pourboir via Tip',
      'ui.images.discover.title': 'Découvrir',
      'ui.images.discover.description': 'Permet de découvrir de nouveaux bars en lien avec ceux que tu aimes déjà',
      'ui.contact.name': 'Qui es-tu ?',
      'ui.contact.first-name': 'Prénom',
      'ui.contact.last-name': 'Nom',
      'ui.contact.mail': 'Mail',
      'ui.contact.subject': 'Sujet de ton message',
      'ui.contact.message': 'Ton message',
      'ui.contact.submit': 'Envoyer',
      'ui.contact.validation.first-name': 'Merci de renseigner ton prénom',
      'ui.contact.validation.email': 'Merci de renseigner un mail valide',
      'ui.contact.validation.subject': 'Merci de renseigner le sujet de ton message',
      'ui.contact.validation.message': 'Merci de renseigner un message',
      'ui.contact.validation.required-fields': 'Champs obligatoires',
      'ui.contact.validation.success': 'Succès !',
      'ui.contact.validation.success-message': 'Votre message a bien été envoyé',
    },
    en: {
      'ui.nav.team': 'The team',
      'ui.nav.images': 'EN',
      'ui.nav.contact': 'EN',
      'ui.nav.legal-notices': 'Legal notices',
      'ui.nav.follow': 'Follow us : ',
      'ui.nav.donate': 'Donate',
      'ui.first-look.title': 'Title_EN',
      'ui.first-look.description': 'Description_EN',
      'ui.features.bar-selection.title': 'EN',
      'ui.features.bar-selection.description': 'EN',
      'ui.features.promotions.title': 'EN',
      'ui.features.promotions.description': 'EN',
      'ui.features.rendez-vous.title': 'EN',
      'ui.features.rendez-vous.description': 'EN',
      'ui.features.community.title': 'EN',
      'ui.features.community.description': 'EN',
      'ui.features.be-notify.title': 'EN',
      'ui.features.be-notify.description': 'EN',
      'ui.features.favorite-bars.title': 'EN',
      'ui.features.favorite-bars.description': 'EN',
      'ui.images.account.title': 'EN',
      'ui.images.account.description': 'EN',
      'ui.images.bar-commu.title': 'EN',
      'ui.images.bar-commu.description': 'EN',
      'ui.images.bar-info.title': 'EN',
      'ui.images.bar-info.description': 'EN',
      'ui.images.bar-services.title': 'EN',
      'ui.images.bar-services.description': 'EN',
      'ui.images.discover.title': 'EN',
      'ui.images.discover.description': 'EN',
      'ui.contact.name': 'Who are you ?',
      'ui.contact.first-name': 'First name',
      'ui.contact.last-name': 'Last name',
      'ui.contact.mail': 'E-mail',
      'ui.contact.subject': 'Suject of your message',
      'ui.contact.message': 'Your message',
      'ui.contact.submit': 'Submit',
      'ui.contact.validation.first-name': 'Please enter your name',
      'ui.contact.validation.email': 'Please enter a valid e-mail',
      'ui.contact.validation.subject': 'Please enter a subject',
      'ui.contact.validation.message': 'Please enter a message',
      'ui.contact.validation.required-fields': 'Required fields',
      'ui.contact.validation.success': 'Success !',
      'ui.contact.validation.success-message': 'Your message has been sent',
    }
  };

  constructor(private http: HttpClient) {
  }

  public getByKey(key: string, language: string) {
    return _.get(this.i18nData[language], 'ui.' + key, null);
  }
}

