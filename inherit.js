class user{
    constructor(username,email,passoword){
        this.username = username;
        this.email = email;
        this.passoword = passoword;
    }

    static countUser(){
        console.log('There are 50 users');
    }
     
    register(){
        console.log(this.username+' is now registered');
    }
}

//let bob = new user('bob','bob@email.com','12345');
//bob.register();
//user.countUser();

class Member extends user{
    constructor(username,email,password,memberPackage){
        super(username,email,password);
        this.package = memberPackage;
        let todaysDate = new Date();
        const membershipactivetillYear = todaysDate.getFullYear();
        const membershipactivetillMonth = todaysDate.getMonth();
        const membershipactivetillDay = todaysDate.getDay();
        this.membershipactivetilldate = new Date(
          membershipactivetillYear,
          membershipactivetillMonth +1,
          membershipactivetillDay
        );
    }

    renewMembership() {
        const membershipactivetillYear = this.membershipactivetilldate.getFullYear();
        const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
        const membershipactivetillDay = this.membershipactivetilldate.getDay();

        
    this.membershipactivetilldate = new Date(
        membershipactivetillYear,
        membershipactivetillMonth,
        membershipactivetillDay
      );
    }
    subscriptionActiveTill() {
        console.log(this.username +" is scubscribed to " + this.package +"uptill" + this.membershipactivetilldate);
      }

    getPackage(){
        console.log(this.username+' is subscribe to the '+this.package+' package ');
    }
}

let mike = new Member('mike','mike@gmail.com','123','Standard');
mike.getPackage();
mike.register();
mike.renewMembership();
mike.subscriptionActiveTill();
