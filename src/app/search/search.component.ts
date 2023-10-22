import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
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
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  ngOnInit(): void {
    super.ngOnInit();

    this.form = new FormGroup({
      word: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const form = this.form;
    const value = form.value;

    if (form.valid) {
      this.store.dispatch(EntryActions.fetch({ word: value.word }));
      this.formGroupDirective.resetForm(value);
    }
  }
}
