import { CdkMenuModule } from '@angular/cdk/menu';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../../shared/base/base.component';
import { Font } from '../../shared/font/font.model';
import { FontMenuComponent } from './font-menu/font-menu.component';
import * as FontSelectors from '../../shared/font/store/font.selectors';

@Component({
  imports: [CommonModule, CdkMenuModule, LetDirective, FontMenuComponent],
  selector: 'app-font-select',
  standalone: true,
  styleUrls: [
    './styles/font-select.component.css',
    `./styles/mobile.font-select.component.css`,
    `./styles/tablet.font-select.component.css`,
    `./styles/desktop.font-select.component.css`,
  ],
  templateUrl: './font-select.component.html',
})
export class FontSelectComponent extends BaseComponent implements OnInit {
  fontName$: Observable<Font>;
  position: ConnectedPosition[] = [
    {
      offsetX: -63,
      offsetY: 18,
      originX: `start`,
      originY: `bottom`,
      overlayX: `start`,
      overlayY: `top`,
    },
  ];

  ngOnInit(): void {
    super.ngOnInit();

    this.fontName$ = this.store.select(FontSelectors.selectState);
  }
}
