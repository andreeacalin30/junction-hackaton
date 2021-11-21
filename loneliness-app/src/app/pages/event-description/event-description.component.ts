import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss']
})
export class EventDescriptionComponent implements OnInit {
  public eventsList =[{
    name: 'Festival Finder',
    description: 'The Finland Festivals site lists what must be every music, film and arts festival in Finland! Events are broken down into: Multi-Arts Festivals, Classical Music, Opera and Choral Music, Contemporary Music, Jazz / Blues, Pop / Rock, Folk, Dance, Theatre and Literature, Children and Young People, Visual Art, and Film',
    time:'20 Nov 2021, 5pm',
    photo:"../../../assets/festival.jpg"
  },
  {
    name: 'Museot',
    description: 'This Friday at the chess club there will be a grand 12 play contest between the people registered. You can either join as a participant or come and support some of your friends while they play their opponents. The address is: Vartiovuorenkatu 6.',
    time:' Time of meeting: 5pm. Places: 23, time:20 Nov 2021, 5pm',
    photo:"../../../assets/chess.PNG"
  },
  {
    name: 'Book release',
    description: 'Outside gathering',
    time:'20 Nov 2021, 5pm',
    photo:""
  },
  {
    name: 'Book release',
    description: 'Outside gathering',
    time:'20 Nov 2021, 5pm',
    photo:""
  }]

  goToHomePage(){
    this.router.navigateByUrl('/welcome-page');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
