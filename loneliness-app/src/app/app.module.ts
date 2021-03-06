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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { JwPaginationModule } from 'jw-angular-pagination';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ElderServicesComponent } from './pages/elder-services/elder-services.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import {MatChipsModule} from '@angular/material/chips';
import { ContactSeniorComponent } from './pages/contact-senior/contact-senior.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EventDescriptionComponent } from './pages/event-description/event-description.component';
import { RatingModule } from 'ng-starrating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
    AdminLoginComponent,
    DashboardComponent,
    ElderServicesComponent,
    EventListComponent,
    ContactSeniorComponent,
    UserProfileComponent,
    EventDescriptionComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MDBBootstrapModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSelectModule,
    AmplifyUIAngularModule,
    JwPaginationModule,
    MatChipsModule,
    RatingModule,
    NgbModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA],
    exports: [ MatFormFieldModule, MatInputModule ]
    
})
export class AppModule { }
