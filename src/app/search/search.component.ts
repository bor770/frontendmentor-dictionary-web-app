import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { Subscription } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import * as EntryActions from '../entry/store/entry.actions';
import * as EntrySelectors from '../entry/store/entry.selectors';

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
export class SearchComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  entrySubscription: Subscription;
  form: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  ngOnInit(): void {
    super.ngOnInit();

    this.form = new FormGroup({
      word: new FormControl(null, Validators.required),
    });

    this.entrySubscription = this.store
      .select(EntrySelectors.selectState)
      .subscribe(() => {
        this.formGroupDirective.resetForm(this.form.value);
      });
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(EntryActions.fetch({ word: this.form.value.word }));
    }
  }

  ngOnDestroy(): void {
    this.entrySubscription.unsubscribe();
  }
}
