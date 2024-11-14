import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'nos', component: WhyUsComponent }
];
