import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/aws-services/security/auth.service';
import { SessionService } from 'src/app/services/aws-services/session-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  public eventsList =[{
    name: 'Festival Finder',
    description: 'The Finland Festivals site lists what must be every music, film and arts festival in Finland! ',
    time:'20 Nov 2021, 5pm',
    photo:"../../../assets/festival.jpg"
  },
  {
    name: 'Museot',
    description: 'This Friday at the chess club there will be a grand 12 play contest between the people registered. ',
    time:' Time of meeting: 5pm. Places: 23, time:20 Nov 2021, 5pm',
    photo:"../../../assets/chess.PNG"
  },
  {
    name: 'Book release',
    description: 'Outside gathering',
    time:'20 Nov 2021, 5pm'
  },
  {
    name: 'Book release',
    description: 'Outside gathering',
    time:'20 Nov 2021, 5pm'
  }]
  goToHomePage(){
    this.router.navigateByUrl('/welcome-page');
  }
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
  public isMobileResolution = false;
  public innerWidth: any;
  public lastScrollTop = 0;
  constructor(private router: Router, public  authService: AuthService, public sessionService: SessionService) { 
  }

  goToEvent(){
    this.router.navigateByUrl('/event-description');
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
