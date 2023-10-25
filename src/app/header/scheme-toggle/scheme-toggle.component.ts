import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../../shared/base/base.component';
import { Scheme } from '../../shared/scheme/scheme.model';
import { Width } from '../../shared/layout/layout.model';
import * as SchemeActions from '../../shared/scheme/store/scheme.actions';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-scheme-toggle',
  standalone: true,
  styleUrls: ['./scheme-toggle.component.css'],
  templateUrl: './scheme-toggle.component.html',
})
export class SchemeToggleComponent extends BaseComponent {
  hover = false;

  onHover() {
    this.hover = !this.hover;
  }

  imgSrc(scheme: Scheme, width: Width) {
    return `../../../assets/images/scheme-toggle-${width}-${scheme}${
      scheme === `light` && width === `desktop` && this.hover ? `-hover` : ``
    }.svg`;
  }

  onToggle() {
    this.store.dispatch(SchemeActions.toggle());
  }
}
