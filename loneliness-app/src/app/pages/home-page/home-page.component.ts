import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
 
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
  public isMobileResolution = false;
  public innerWidth: any;
  public lastScrollTop = 0;

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
  
  constructor(private router: Router) { }

  openLookForEvents(){
    this.router.navigateByUrl('/events-list');
  }

  openHireAnElder(){
    this.router.navigateByUrl('elder-services');
  }

  ngOnInit(): void {
    let redirectUrl = localStorage.getItem('redirectUrl');
    localStorage.removeItem('redirectUrl');
    // if(redirectUrl == undefined || redirectUrl == null || redirectUrl == '/auth-callback' || redirectUrl == '/'){

    // }
    this.innerWidth = window.innerWidth;
    this.checkSize(this.innerWidth);
  }


  onWindowScroll(event:any) {
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




