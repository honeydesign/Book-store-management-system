import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LogInComponent }
];
