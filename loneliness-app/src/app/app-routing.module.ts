import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ElderServicesComponent } from './pages/elder-services/elder-services.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  { path: 'welcome-page', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'admin-login', component:  AdminLoginComponent},
  { path: 'new-account-page', component:  SignupPageComponent},
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'elder-services', component:  ElderServicesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
