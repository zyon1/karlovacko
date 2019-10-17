import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "./auth.service";
import { User } from "./user";
import { Observable, from } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Doctor } from "./doctor";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userPath = "users";
  private doctorPath = "doctors";
  usersCollection: Observable<User>;
  uid: string;
  isUserAvailable = false;
  constructor(private db: AngularFirestore, private authService: AuthService) {
    this.authService.isLoggedIn$().subscribe(() => {
      console.log("asd");
      this.isUserAvailable = true;
    });
  }
  createUser(user: User) {
    if (this.isUserAvailable) {
      return this.db
        .doc<User>(`${this.userPath}/${this.authService.user.uid}`)
        .set(user);
    }
    console.error("No user available");

    //.update(user);
  }
  createDoctor(doctor: Doctor) {
    if (this.isUserAvailable) {
      return this.db
        .doc<Doctor>(`${this.doctorPath}/${this.authService.user.uid}`)
        .set(doctor);
    }
    console.error("No user available");

    //.update(user);
  }
  updateUser(user) {
    return this.db.doc<User>(`${this.userPath}/${this.uid}`).update(user);
  }
  getUser$() {
    return this.authService.isLoggedIn$().pipe(
      flatMap(user => {
        this.uid = user.uid;
        return this.db.doc<User>(`${this.userPath}/${user.uid}`).valueChanges();
      })
    );
  }
  getDoctor$() {
    return this.authService.isLoggedIn$().pipe(
      flatMap(user => {
        this.uid = user.uid;
        return this.db
          .doc<Doctor>(`${this.doctorPath}/${user.uid}`)
          .valueChanges();
      })
    );
  }
}
