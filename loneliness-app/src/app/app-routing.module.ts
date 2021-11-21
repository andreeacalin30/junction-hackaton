import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ContactSeniorComponent } from './pages/contact-senior/contact-senior.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ElderServicesComponent } from './pages/elder-services/elder-services.component';
import { EventDescriptionComponent } from './pages/event-description/event-description.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'welcome-page', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'admin-login', component:  AdminLoginComponent},
  { path: 'new-account-page', component:  SignupPageComponent},
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'elder-services', component:  ElderServicesComponent},
  { path: 'events-list', component:  EventListComponent}, 
  { path: 'contact-senior', component:  ContactSeniorComponent},
  { path: 'event-description', component:  EventDescriptionComponent},
  { path: 'user-description', component:  UserProfileComponent},
  { path: 'registration-form', component:  RegistrationFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
