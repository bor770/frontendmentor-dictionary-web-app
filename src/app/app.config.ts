import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { EntryEffects } from './entry/store/entry.effects';
import { LayoutEffects } from './shared/layout/store/layout.effects';
import { rootReducer } from './store/root.reducer';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEffects([EntryEffects, LayoutEffects]),
    provideHttpClient(),
    provideRouter(routes),
    provideRouterStore(),
    provideStore(rootReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
