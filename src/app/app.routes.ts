import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: 'notify', component: HomeComponent },
  { path: '**', redirectTo: 'notify' },
];
