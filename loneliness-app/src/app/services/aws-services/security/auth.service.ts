import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Auth } from "aws-amplify";
import {User} from "oidc-client";
import {CookieService} from 'ngx-cookie-service';
import { mixinColor } from "@angular/material/core";
import jwt_decode from 'jwt-decode';
@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    public newPassRequired: boolean = false;
    public verifiedCode: boolean = false;
    public currentUser = null;
    private jwtHelper = new JwtHelperService();
    private email =''
    constructor(private router:Router, private cookieService: CookieService){}

    async signIn(username: string, password: string) {
        try {
           await Auth.signIn(username, password).then(async user=>{
                this.currentUser = user;
                console.log('Current User: ',  this.currentUser);
                if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                    this.router.navigateByUrl('/renew-first-password');
                } else {
                    // this.router.navigateByUrl('/home');
                    const userInfo = await Auth.currentUserInfo();
                    const userId = userInfo.attributes.sub;
                    this.completeAuthentication();
                }
            });

        } catch (error) {
            console.log('error signing in', error);
        }
    }

    async signUp(username:any, password:any, email:any,
         phone_number:any, user_type:any, firstName: string, lastName: string) {
             let fullName = firstName+" "+lastName
        this.email= email;
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    'name': fullName, 
                    'email': email,          // optional
                    'phone_number': phone_number,   // optional - E.164 number convention
                    'custom:user_type':  user_type     // other custom attributes 
                }
            });
            console.log("Signed up user: " , user);
            this.router.navigateByUrl('/confirm-email');
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    async sendVerificationCode(currentUser: any, verifCode: any){
        console.log('Current user: ',this.currentUser);
        console.log('Email: ', this.email);
    
        try {
            await Auth.confirmSignUp(this.email, verifCode);
            console.log('Email Confirmed')
            this.router.navigateByUrl('/login');
        } catch (error) {
            console.log('error signing up:', error);
        }
       
    }

    async completeAuthentication(): Promise<void> {
        let accessToken;
        let idToken;
        let userEmail;
        await Auth.currentSession().then(async res => {
            console.log('Current Session: ', res)

            let rawAccessToken = res.getAccessToken()
            accessToken = rawAccessToken.getJwtToken()
            console.log('AccessToken '+accessToken);


            let rawIdToken = res.getIdToken();
            idToken = rawIdToken.getJwtToken();
            console.log('IdToken '+idToken);
            // await this.getProfileDetails(idToken);

            this.jwtHelper.getTokenExpirationDate(idToken);
                    //Saving tokens
            this.cookieService.set('AuthToken', accessToken);
            this.cookieService.set('IdToken', idToken);

            let decodedToken = this.getDecodedAccessToken(this.cookieService.get('IdToken'));
            if(decodedToken['custom:user_type']=='AGENT'){
                console.log('AGENT ');
            } else {
                console.log('COMPANY ');
            }
          
            console.log('Decoded token: ', decodedToken);
            console.log(decodedToken['custom:user_type'])
        })

        await Auth.currentUserInfo().then(userInfo => {
            userEmail = userInfo.attributes.email;
        });

        // this.applicationInsightsService.logEvent("Login", {"event_type": "login", "username": userEmail});

    }

    firstTimeLoginRenewPass(currentUser: any, newPassword: string){
        let userEmail= currentUser.challengeParam.userAttributes.email
        let name= currentUser.challengeParam.userAttributes.name
        let phone_number= currentUser.challengeParam.userAttributes.phone_number
        Auth.completeNewPassword(
            currentUser,   // the Cognito User Object
            newPassword,       // the new password
            {
                // name: 'Andreea', 
                email: userEmail,
                // phone_number:'+40728374651'
              }
        ).then(user => {
            console.log('User changed password: ' , user);
            // this.router.navigateByUrl('/auth-callback');
        }).catch(e => {
          console.log(e);
        });
    }

    async forgotPassword(username: string){
        Auth.forgotPassword(username)
        .then(data =>
            {
                console.log('Forgot password: ' ,data);
                this.newPassRequired = true;

            })
        .catch(err => console.log(err));
    }

    async signOut(){
        this.cookieService.delete('AuthToken');
        this.cookieService.delete('IdToken');
        try {
          await Auth.signOut();
          localStorage.clear();
          console.log("Signed out");
        } catch (error) {
            console.log('error signing out: ', error);
        }
        this.router.navigate(['/login']);
    }

    getDecodedAccessToken(token: string): any {
        try{
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
      }
}