import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class I18nService {
  private i18nData = {
    fr: {
      'ui.nav.features': 'Fonctionnalités',
      'ui.nav.images': 'Images',
      'ui.nav.legal-notices': 'Mentions légales',
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
      'ui.images.discover.description': 'Permet de découvrir de nouveaux bars en lien avec ceux que tu aimes déjà'
    },
    en: {
      'ui.nav.features': 'EN',
      'ui.nav.images': 'EN',
      'ui.nav.legal-notices': 'Legal notices',
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
    }
  };

  constructor(private http: HttpClient) {
  }

  public getByKey(key: string, language: string) {
    return _.get(this.i18nData[language], 'ui.' + key, null);
  }
}

