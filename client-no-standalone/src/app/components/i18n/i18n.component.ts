import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrl: './i18n.component.css'
})
export class I18nComponent {
  param = { value: 'world' };

  constructor(translate: TranslateService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    // translate.use('fa');
  }
}
