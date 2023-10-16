import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Scheme } from '../scheme/scheme.model';
import { Width } from '../layout/layout.model';
import * as FontSelectors from '../font/store/font.selectors';
import * as SchemeSelectors from '../scheme/store/scheme.selectors';
import * as LayoutSelectors from '../layout/store/layout.selectors';

@Component({
  imports: [CommonModule],
  selector: 'app-base',
  standalone: true,
  styleUrls: ['./base.component.css'],
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnInit {
  font$: Observable<string>;
  scheme$: Observable<Scheme>;
  width$: Observable<Width>;

  constructor(public store: Store) {}

  ngOnInit(): void {
    const store = this.store;

    this.font$ = store.select(FontSelectors.selectFontCssName);
    this.scheme$ = store.select(SchemeSelectors.selectState);
    this.width$ = store.select(LayoutSelectors.selectState);
  }
}
