import { createAction, props } from '@ngrx/store';

import { Font } from '../font.model';

export const set = createAction(`[Font] Set`, props<{ font: Font }>());
