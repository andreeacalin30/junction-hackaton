import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from 'ng-starrating';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public citizensList =[{
    name: 'Isabela Minerva',
    description:
     "I have been a French teacher for the past 40 years and I would like to find some children to which I can teach this wonderful language. I can teach any grade from the 1st to the end of high-school, or literally anyone that would like to improve their language level. I am available for this Mondays and Tuesdays for 2 hours a session, between 10am and 5pm. Don’t hesitate to contact me!",
    skills: ['Piano lessons', 'Reading'],
    photo: "../../../assets/old-lady.jpg",
    rating: 4
  },
  {
    name: 'Granny 1',
    description: 'asdalskdmas',
    skills: ['Piano lessons', 'Cooking lessons'],
    rating: 4
  },
  {
    name: 'Granny 1',
    description: 'asdalskdmas',
    skills: ['Piano lessons', 'BabySitting'],
    rating: 4
  },
  {
    name: 'Granny 1',
    description: 'asdalskdmas',
    skills: ['Coummunity service'],
    rating: 4
  }]
  goToContact(){
    
    this.router.navigateByUrl('/contact-senior');
  }

  goToHomePage(){
    this.router.navigateByUrl('/welcome-page');
  }

  constructor(config: NgbRatingConfig, private router: Router) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = false;
  }
  ngOnInit(): void {
  }

  
}
