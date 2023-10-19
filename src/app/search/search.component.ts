import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import * as EntryActions from '../entry/store/entry.actions';

@Component({
  imports: [CommonModule, LetDirective, ReactiveFormsModule],
  selector: 'app-search',
  standalone: true,
  styleUrls: [
    './styles/search.component.css',
    `./styles/mobile.search.component.css`,
    `./styles/tablet.search.component.css`,
    `./styles/desktop.search.component.css`,
    `./styles/dark.search.component.css`,
    `./styles/light.search.component.css`,
  ],
  templateUrl: './search.component.html',
})
export class SearchComponent extends BaseComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    super.ngOnInit();

    this.form = new FormGroup({
      word: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(EntryActions.fetch({ word: this.form.value.word }));
    }
  }
}
