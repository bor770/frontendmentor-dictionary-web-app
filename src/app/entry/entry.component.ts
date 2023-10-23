import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { EntryError, EntryValue } from './entry.model';
import * as EntryActions from './store/entry.actions';
import * as EntrySelectors from './store/entry.selectors';

@Component({
  imports: [CommonModule, LetDirective],
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
  nyms = [`synonyms`, `antonyms`];
  value$: Observable<EntryValue>;
  @ViewChild(`audio`) audio: ElementRef;

  ngOnInit(): void {
    super.ngOnInit();

    const store = this.store;

    this.error$ = store.select(EntrySelectors.selectError);
    this.value$ = store.select(EntrySelectors.selectValue);
  }

  imgSrc() {
    return `../../assets/images/icon-play${this.hover ? `-hover` : ``}.svg`;
  }

  onHover() {
    this.hover = !this.hover;
  }

  onPlay() {
    this.audio.nativeElement.play();
  }

  onNymClick(nym: string) {
    this.store.dispatch(EntryActions.fetch({ word: nym }));
  }
}
