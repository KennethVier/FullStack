import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { PortfolioComponent } from './features/portfolio/portfolio-component';


export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'portfolio', component: PortfolioComponent },
//   { path: 'about', component: About },
//   { path: 'skills', component: Skills }
];
