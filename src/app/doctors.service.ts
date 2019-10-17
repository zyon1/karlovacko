import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Doctor } from "./doctor";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DoctorsService {
  private itemsCollection: AngularFirestoreCollection<Doctor>;
  items: Observable<Doctor[]>;
  constructor(private readonly db: AngularFirestore) {
    this.itemsCollection = db.collection<Doctor>("doctors");
    //  this.itemsCollection.valueChanges().subscribe(console.log);
  }

  getDoctors$() {
    return this.itemsCollection.valueChanges();
  }
}
