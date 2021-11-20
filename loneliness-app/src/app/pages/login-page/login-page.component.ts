import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/aws-services/session-service.service';
import { AuthService } from 'src/app/services/aws-services/security/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

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
    // if(this.loginForm.get('email')?.value.includes('company')){
    //   //aici se va verifica de fapt tipul de user din baza de date
    //   this.router.navigateByUrl('/company-home');
    // } else {
    //   this.router.navigateByUrl('/agent-home');
    // }
    let username = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    let result = this.authService.signIn(username, password);
    console.log('New pass required? ', this.authService.newPassRequired);

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
