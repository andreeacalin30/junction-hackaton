import { HostListener, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/aws-services/session-service.service';
import { SignInService } from 'src/app/services/aws-services/sign-in.service';
import { AuthService } from 'src/app/services/aws-services/security/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

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
  public signupForm:FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, public  authService: AuthService, public sessionService: SessionService) { 
    this.signupForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      accountType: [''],
      password: ['']
    });
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

  signupUser(event: any){
    let firstName = this.signupForm.get('firstName')?.value;
    let lastName = this.signupForm.get('lastName')?.value;
    let email = this.signupForm.get('email')?.value;
    let phone = this.signupForm.get('phone')?.value;
    let accountType = this.signupForm.get('accountType')?.value;
    let password = this.signupForm.get('password')?.value;
    this.authService.signUp(email, password,email, phone, accountType, firstName, lastName);
  }

  ngOnInit(): void {
    // console.log('New pass required? ', this.authService.newPassRequired);
  }

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
