import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { ExperiencesComponent } from './modules/pages/experiences/experiences.component';
import { FormationsComponent } from './modules/pages/formations/formations.component';

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
        path: 'experiences',
        component: ExperiencesComponent
    },
    {
        path: 'formations',
        component: FormationsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
