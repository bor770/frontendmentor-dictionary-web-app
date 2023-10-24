import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Subscription, distinctUntilChanged, filter } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import * as RouterSelectors from '../store/router.selectors';

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
  form: FormGroup;
  storeSubscription: Subscription;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private router: Router, public store: Store) {
    super(store);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.form = new FormGroup({
      word: new FormControl(null, Validators.required),
    });

    const form = this.form;

    form.statusChanges
      .pipe(
        distinctUntilChanged(),
        filter((status) => status === `VALID`)
      )
      .subscribe(() => {
        this.formGroupDirective.resetForm(form.value);
      });

    this.storeSubscription = this.store
      .select(RouterSelectors.selectUrlWord)
      // eslint-disable-next-line @ngrx/no-store-subscription
      .subscribe((word) => {
        form.patchValue({ word });
      });
  }

  onSubmit() {
    const form = this.form;
    const value = form.value;

    if (form.valid) {
      this.router.navigate([value.word]);
    }
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
