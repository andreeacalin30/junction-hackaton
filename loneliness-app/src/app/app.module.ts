import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header-component/header-component.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    FooterComponent,
    HeaderComponent,
    AuthCallbackComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class AppModule { }
