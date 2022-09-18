import { environment } from './../../../../environments/environment';
import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ACCESS_TOKEN } from '../../utils/configApp';
import { GoogleAuthProvider } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLogin = false;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private route: Router
  ) {}

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  AuthLogin(provider: any) {
    return this.firebaseAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('result:', result);
        localStorage.setItem(ACCESS_TOKEN, 'true');
        this.route.navigate(['dashboard'])
      })
      .catch((error) => {
        console.log(error);
        this.route.navigate(['']);
      });
  }

  logout() {
    this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem(ACCESS_TOKEN);
      this.route.navigate(['']);
    }, err => {
      console.log(err.message);
    })
  }


}
