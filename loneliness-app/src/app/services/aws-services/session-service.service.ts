import { Injectable } from "@angular/core";
import { Auth } from "aws-amplify";
import { User } from "src/app/models/User";
@Injectable({
    providedIn: 'root',
  })

export class SessionService {
    // public currentUser: User;
    public isCurrentUser: boolean = false;
    getCurrentUser(){
        Auth.currentSession().then(res=>{
            if(res){
                this.isCurrentUser = true;
            }
            let accessToken = res.getAccessToken()
            let jwt = accessToken.getJwtToken()
            //You can print them to see the full objects
            console.log(`result: ${JSON.stringify(res)}`)
            console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
            console.log(`myJwt: ${jwt}`)
          }).catch(()=>{
            this.isCurrentUser = false;
          });
    }
}