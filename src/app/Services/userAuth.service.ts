import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isloggedsubject: BehaviorSubject<boolean> ;
  constructor() {
   this.isloggedsubject=new BehaviorSubject<boolean> (this.isUserLogged)
  }

  login(userName: string, password: string) {
    let userToken = '123456789';
    localStorage.setItem('token', userToken);
    this.isloggedsubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.isloggedsubject.next(false);
  }

  get isUserLogged() {
    return localStorage.getItem('token') ? true : false;
  }

  getloggedSubject(){
    return this.isloggedsubject
  }
}
