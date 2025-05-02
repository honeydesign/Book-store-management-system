import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';  // Import your SignUpComponent

// Define your app's routes
const routes: Routes = [
  { path: 'signup', component: SignUpComponent }, // Path for SignUpComponent
  // Add more routes as needed here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configure routing with your routes
  exports: [RouterModule]  // Export RouterModule to make the router available throughout your app
})
export class AppRoutingModule {}
