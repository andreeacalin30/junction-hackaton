import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/aws-services/security/auth.service';
import { SessionService } from 'src/app/services/aws-services/session-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  // public contactForm:FormGroup;
  
  availList =[
    {value: 'Availability'},
    {value: 'Once a week'},
    {value: 'Twice a week'},
    {value: 'Twice a month'}
  ]
  paidOption =[
    {value: 'Paid'},
    {value: 'Not Paid'},
  ]

  freqList =[
    {value: 'Requency of contact'},
    {value: 'Once a week'},
    {value: 'Twice a week'}
  ]
  constructor(private formBuilder: FormBuilder, private router: Router, public  authService: AuthService, public sessionService: SessionService) { 
    // this.contactForm = this.formBuilder.group({
    //   firstName: [''],
    //   lastName: [''],
    //   address: [''],
    //   phone: [''],
    //   titleOfService: [''],
    //   citizenToggle:[''],
    //   suggestionsToggle:[''],
    //   availability:[''],
    //   paidOption:[''],
    //   serviceDescription:[''],
    //   interestedIn:[''],
    //   freqContact:['']
    // });
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  goToHomePage(){
    this.router.navigateByUrl('/welcome-page');
  }

  loginUser(event: any){
    // let username = this.loginForm.get('email')?.value;
    // let password = this.loginForm.get('password')?.value;
    // let result = this.authService.signIn(username, password);
    // this.router.navigateByUrl('/dashboard');
    // console.log('New pass required? ', this.authService.newPassRequired);
  }

  ngOnInit(): void { }

}
