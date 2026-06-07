import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'landing-page', loadChildren: () => import('./landing-page/landing-page.routes').then(m => m.routes), data: { text: 'Landing-Page' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
