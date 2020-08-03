export class registerUser{

    constructor(public email :string,public password :string,public confirmPassword :string,
         public fullName ?:string,public age? :number,public  birthDate? :string, public gender ?:string,public id?:string) {
       
    }

}