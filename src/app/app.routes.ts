import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';
import { AboutComponent } from './modules/pages/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
