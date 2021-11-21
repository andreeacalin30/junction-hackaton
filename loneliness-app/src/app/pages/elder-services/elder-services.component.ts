import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/aws-services/security/auth.service';
import { SessionService } from 'src/app/services/aws-services/session-service.service';

@Component({
  selector: 'app-elder-services',
  templateUrl: './elder-services.component.html',
  styleUrls: ['./elder-services.component.scss']
})
export class ElderServicesComponent implements OnInit {
  public citizensList =[{
    name: 'Isabela Minerva',
    interests: 'I have been a French teacher for the past 40 years and I would like to find some children to which I can teach this wonderful language',
    skills: ['French', 'Reading'],
    photo: "../../../assets/old-lady.jpg"
  },
  {
    name: 'Maskic Aston',
    interests: 'I have always been good at piano, it was my lifetime passion and refugee.',
    skills: ['Piano lessons', 'Cooking lessons'],
    photo: "../../../assets/old-man.jpg"
  },
  {
    name: 'Granny 1',
    interests: 'asdalskdmas',
    skills: ['Piano lessons', 'BabySitting']
  },
  {
    name: 'Granny 1',
    interests: 'asdalskdmas',
    skills: ['Coummunity service']
  }]

  removable = true;
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

  goToContact(){
    
    this.router.navigateByUrl('/user-description');
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

  goToHomePage(){
    this.router.navigateByUrl('/welcome-page');
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
  ngOnInit(): void {
  }

}
