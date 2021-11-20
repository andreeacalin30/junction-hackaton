import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
@Injectable({
    providedIn: 'root',
  })
export class SignInService {
    public newPassRequired: boolean = false;
    public verifiedCode: boolean = false;

    constructor(private router:Router){}

    async signUp(username: string, password: string, phone_number: string) {
        let name = 'Andreea';
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    name, 
                    username,
                    phone_number    
                      // optional
                    // phone_number,   // optional - E.164 number convention
                    // other custom attributes 
                }
            });
            console.log('Signed up user: ', user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

     async signIn(username: string, password: string) {
        try {
            const user = await Auth.signIn(username, password).then(user=>{
                console.log('User: ', user);
                if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                   
                    this.forgotPassword(username);
                }
            });
           
            // this.router.navigateByUrl('/our-company');
        } catch (error) {
            console.log('error signing in', error);
        }
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


    async resendConfirmationCode(username: string) {
        try {
            await Auth.resendSignUp(username).then(()=>{
                this.newPassRequired = true;
                this.verifiedCode = true;
            });
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

    async senConfirmationCode(username: string){
        try{
           await Auth.verifyCurrentUserAttribute(username)
            .then(() => {
                console.log('a verification code is sent');
            }).catch((e) => {
                console.log('failed with error', e);
            });

        } catch (err) {
            console.log('error resending code: ', err);
        }
               
    }

    async confirmCode(username: string, code: string) {
        try {
            await Auth.verifyUserAttribute(username, code).then(res=>{
                console.log('Verifying code: ', res)
            });
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

    getCurrentUser(){
        Auth.currentSession().then(res=>{
            let accessToken = res.getAccessToken()
            let jwt = accessToken.getJwtToken()
            //You can print them to see the full objects
            console.log(`result: ${JSON.stringify(res)}`)
            console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
            console.log(`myJwt: ${jwt}`)
          })
    }

    async signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
}
