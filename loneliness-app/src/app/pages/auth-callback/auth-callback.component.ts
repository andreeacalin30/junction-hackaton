import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/aws-services/security/auth-guard.service';
import { AuthService } from 'src/app/services/aws-services/security/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private authService: AuthService, private authGuardService: AuthGuardService, private router: Router) { }

  ngOnInit(): void {
    this.authService.completeAuthentication()
    .then(() => {
        // if (this.authService.profileDetails.profileRole.includes(ProfileRole.SYSTEM_ADMIN)) {
        //     this.router.navigateByUrl('/users');
        //     return;
        // } else if (this.authService.profileDetails.profileRole.includes(ProfileRole.REPORTING)) {
        //     this.router.navigateByUrl('/reports');
        //     return;
        // }
        this.router.navigateByUrl('/home');
    }).catch(() => {
    this.router.navigateByUrl('');
});
  }
}
