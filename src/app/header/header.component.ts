import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import { FontSelectComponent } from './font-select/font-select.component';
import { SchemeToggleComponent } from './scheme-toggle/scheme-toggle.component';

@Component({
  imports: [
    CommonModule,
    LetDirective,
    FontSelectComponent,
    SchemeToggleComponent,
  ],
  selector: 'app-header',
  standalone: true,
  styleUrls: [
    './styles/header.component.css',
    `./styles/mobile.header.component.css`,
    `./styles/tablet.header.component.css`,
    `./styles/desktop.header.component.css`,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent {}
