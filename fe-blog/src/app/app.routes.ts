import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorprofileComponent } from './authorprofile/authorprofile.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'Authorprofile',
        component : AuthorprofileComponent
    }
];
