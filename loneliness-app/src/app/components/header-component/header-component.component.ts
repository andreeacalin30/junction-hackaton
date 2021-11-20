import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/services/aws-services/sign-in.service';
import { AuthService } from 'src/app/services/aws-services/security/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll') 
  onScroll(e: Event): void {
    console.log('position')
    console.log(this.getYPosition(e));
 }
 @HostListener('window:resize', ['$event']) 
 onResize(event:any) {
  this.innerWidth = window.innerWidth;
  this.checkSize(this.innerWidth);
}

checkSize(innerWidth: number){
  if (innerWidth < 768) {
    this.isMobileResolution = true;
    console.log('mobile')
  } else {
    console.log('web app')
    this.isMobileResolution = false;
  }
}

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  public isMobileResolution = false;
  private innerWidth: any;
  public collapse = true;
  public panelOpenState = false;

  public lastScrollTop = 0;
  public inLoginPage = false;
  public inUserPages = false;
  constructor(private router: Router, private authService: AuthService, private cookieService: CookieService) {
    if(this.router.url ==='/admin-login'){
      this.inLoginPage = true;
      console.log(this.router.url)  
      this.inUserPages = false;
    } else {
      this.inLoginPage = false;
      this.inUserPages = true;
    }
    }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.checkSize(this.innerWidth);
    console.log('Current user: ',this.authService.currentUser);
    console.log(this.cookieService.get('IdToken'));
  }

  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }

  goToHomePage(event:any){
    this.router.navigateByUrl('/welcome-page');
  }

  goToOurCompany(event:any){
    this.router.navigateByUrl('/our-company');
  }

  goToNewAccount(event:any){
    this.router.navigateByUrl('/new-account-page');
  }

  goToLogin(event:any){
    console.log('Login')
    this.router.navigateByUrl('/admin-login');
   
  }

  signOut(event:any){
    this.authService.signOut();
    this.goToHomePage(event);
  }

  onWindowScroll(event:any) {
    console.log('in header')
    let header_element = document.querySelector('.header-div') as HTMLElement;
    if(this.isMobileResolution==false){
    let home_page_container = document.querySelector('.home-page') as HTMLElement;
    var st = window.pageYOffset || home_page_container.scrollTop;
      if (st > this.lastScrollTop){
        header_element.classList.add('navbar-effect');
     } else {
        header_element.classList.remove('navbar-effect');
     }
    } else {
      header_element.classList.remove('navbar-effect');
    }
    
  }

}
