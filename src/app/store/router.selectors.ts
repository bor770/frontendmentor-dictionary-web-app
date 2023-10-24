import { getRouterSelectors } from '@ngrx/router-store';

export const selectUrlWord = getRouterSelectors().selectRouteParam(`word`);
