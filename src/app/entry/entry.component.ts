import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { EntryError, EntryValue } from './entry.model';
import { SpinnerComponent } from './spinner/spinner.component';
import * as EntrySelectors from './store/entry.selectors';

@Component({
  imports: [CommonModule, LetDirective, SpinnerComponent],
  selector: 'app-entry',
  standalone: true,
  styleUrls: [
    './styles/entry.component.css',
    `./styles/mobile.entry.component.css`,
    `./styles/tablet.entry.component.css`,
    `./styles/desktop.entry.component.css`,
    `./styles/dark.entry.component.css`,
    `./styles/light.entry.component.css`,
  ],
  templateUrl: './entry.component.html',
})
export class EntryComponent extends BaseComponent implements OnInit {
  error$: Observable<EntryError>;
  hover = false;
  isLoading$: Observable<boolean>;
  nyms = [`synonyms`, `antonyms`];
  value$: Observable<EntryValue>;
  @ViewChild(`audio`) audio: ElementRef;

  constructor(private router: Router, public store: Store) {
    super(store);
  }

  ngOnInit(): void {
    super.ngOnInit();

    const store = this.store;

    this.error$ = store.select(EntrySelectors.selectError);
    this.value$ = store.select(EntrySelectors.selectValue);
    this.isLoading$ = store.select(EntrySelectors.selectIsLoading);
  }

  onHover() {
    this.hover = !this.hover;
  }

  imgSrc() {
    return `../../assets/images/icon-play${this.hover ? `-hover` : ``}.svg`;
  }

  onPlay() {
    this.audio.nativeElement.play();
  }

  onNymClick(nym: string) {
    this.router.navigate([nym]);
  }
}
