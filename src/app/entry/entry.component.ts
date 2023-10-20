import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { EntryError, EntryValue } from './entry.model';
import * as EntrySelectors from './store/entry.selectors';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-entry',
  standalone: true,
  styleUrls: ['./entry.component.css'],
  templateUrl: './entry.component.html',
})
export class EntryComponent extends BaseComponent implements OnInit {
  error$: Observable<EntryError>;
  value$: Observable<EntryValue>;

  ngOnInit(): void {
    super.ngOnInit();

    const store = this.store;

    this.error$ = store.select(EntrySelectors.selectError);
    this.value$ = store.select(EntrySelectors.selectValue);
  }
}
