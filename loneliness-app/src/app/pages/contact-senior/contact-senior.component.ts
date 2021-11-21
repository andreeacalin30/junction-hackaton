import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/aws-services/security/auth.service';
import { SessionService } from 'src/app/services/aws-services/session-service.service';

@Component({
  selector: 'app-contact-senior',
  templateUrl: './contact-senior.component.html',
  styleUrls: ['./contact-senior.component.scss']
})
export class ContactSeniorComponent implements OnInit {
  public contactForm:FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, public  authService: AuthService, public sessionService: SessionService) { 
    this.contactForm = this.formBuilder.group({
      lastName: [''],
      firstName: [''],
      phone: [''],
      date: [''],
      shortMessage: ['']
    });
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  loginUser(event: any){
    // let username = this.loginForm.get('email')?.value;
    // let password = this.loginForm.get('password')?.value;
    // let result = this.authService.signIn(username, password);
    this.router.navigateByUrl('/elder-services');
    // console.log('New pass required? ', this.authService.newPassRequired);
  }

  goToHomePage(){
    this.router.navigateByUrl('/welcome-page');
  }

  ngOnInit(): void { }
}
