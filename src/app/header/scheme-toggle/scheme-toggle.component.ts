import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../../shared/base/base.component';
import * as SchemeActions from '../../shared/scheme/store/scheme.actions';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-scheme-toggle',
  standalone: true,
  styleUrls: ['./scheme-toggle.component.css'],
  templateUrl: './scheme-toggle.component.html',
})
export class SchemeToggleComponent extends BaseComponent {
  onToggle() {
    this.store.dispatch(SchemeActions.toggle());
  }
}
