import { UserType } from "./UserType";

export class User{
    email: string;
    userType: UserType;

    constructor( email: string,
        userType: UserType){
            this.email = email;
            this.userType = userType;
    }

    get getEmail():string{
        return this.email;
    }

    get getUserType():UserType{
        return this.userType;
    }
}