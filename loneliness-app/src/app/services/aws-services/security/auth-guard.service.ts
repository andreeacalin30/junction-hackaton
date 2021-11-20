import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
// import {AuthService} from './auth.service';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
//TO DO LATER ON WHEN WE HAVE SERVER SIDE AND USER TYPES
//   constructor(private authService: AuthService, private router: Router,
//               private cookieService: CookieService){}

    constructor(private router: Router,
                private cookieService: CookieService){}

  private jwtHelper = new JwtHelperService();
  public profileDetails: any;


  async canActivate(
      route: ActivatedRouteSnapshot) {

    // if (await this.authService.isLoggedIn()) {
    //   if (this.authService.profileDetails
    //       && this.authService.profileDetails.profileRole.find(userRole => route.data.role.includes(userRole))) {
    //     return true;
    //   } else {
    //     this.router.navigateByUrl('/error_401_403');
    //     return false;
    //   }
    // }

    this.router.navigateByUrl('/login');
    return false;
  }

}
