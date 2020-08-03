export class userResponse{
    /**
     *
     */
    constructor( 
        public  message: string,
        public  isSuccess: boolean,
        public  isAuthenticated :boolean,
        public  Errors:string[] ,
        public  expireDate: Date) {
       
    }
}