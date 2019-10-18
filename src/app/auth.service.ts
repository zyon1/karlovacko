import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";
import { auth } from "firebase/app";
import { of } from "rxjs";

import { DoctorSearchComponent } from './doctor-search/doctor-search.component';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: User;
  urlState: string;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        localStorage.setItem("user", null);
        this.user = null;
      }
    });
  }

  get isLoggedIn(): boolean {
    return JSON.parse(localStorage.getItem("user")) !== null;
  }
  isLoggedIn$() {
    if (this.user) {
      return of(this.user);
    } else {
      return this.afAuth.authState;
    }
  }


  login(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => (window.location.href = "dashboard"));
  }
  loginWithGoogle() {
    return this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => (window.location.href = "dashboard"));
  }

  logout() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem("user");
      window.location.href = "/auth";
    });
  }
}
