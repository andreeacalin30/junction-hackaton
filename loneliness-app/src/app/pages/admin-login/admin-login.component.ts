import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/aws-services/security/auth.service';
import { SessionService } from 'src/app/services/aws-services/session-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  @HostListener('window:scroll') 
  onScroll(e: Event): void {
    console.log('position')
    console.log(this.getYPosition(e));
 }
 @Input() verificationCode = '';

  @HostListener('window:resize', ['$event']) 
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
    this.checkSize(this.innerWidth);
  }
  public isMobileResolution = false;
  public innerWidth: any;
  public lastScrollTop = 0;
  public loginForm:FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, public  authService: AuthService, public sessionService: SessionService) { 
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  gotToDashboard(){
    let username = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    if(this.loginForm.valid){
      this.router.navigateByUrl('/dashboard');
    }
  }


  checkSize(innerWidth: number){
    if (innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  loginUser(event: any){
    let username = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    let result = this.authService.signIn(username, password);
    this.router.navigateByUrl('/dashboard');
    // console.log('New pass required? ', this.authService.newPassRequired);
  }

  ngOnInit(): void { }

  onWindowScroll(event:any) {
    let header_element = document.querySelector('.header-div') as HTMLElement;
    if(this.isMobileResolution==false){
    let home_page_container = document.querySelector('.login-page') as HTMLElement;
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
