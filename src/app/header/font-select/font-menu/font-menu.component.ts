import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../../../shared/base/base.component';
import { Font, fontCssName, fonts } from '../../../shared/font/font.model';
import * as FontActions from '../../../shared/font/store/font.actions';

@Component({
  imports: [CommonModule, CdkMenuModule, LetDirective],
  selector: 'app-font-menu',
  standalone: true,
  styleUrls: [
    './styles/font-menu.component.css',
    `./styles/dark.font-menu.component.css`,
    `./styles/light.font-menu.component.css`,
  ],
  templateUrl: './font-menu.component.html',
})
export class FontMenuComponent extends BaseComponent {
  fontCssName = fontCssName;
  fonts = fonts;

  onSelected(font: Font) {
    this.store.dispatch(FontActions.set({ font }));
  }
}
