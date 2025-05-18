import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';



export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }

];
