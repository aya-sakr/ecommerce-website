import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/userAuth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userlogin:boolean=false
email: any;
  constructor(private  userAuth:UserAuthService){}

  ngOnInit(): void {
 this.userlogin = this.userAuth.isUserLogged

  }

  login(){
    this.userAuth.login("userName","password")
     this.userlogin = this.userAuth.isUserLogged

  }

  logout(){
     this.userAuth.logout()
     this.userlogin = this.userAuth.isUserLogged

  }

}
