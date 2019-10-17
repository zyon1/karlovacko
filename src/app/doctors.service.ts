import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Doctor } from "./doctor";
import { filter, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DoctorsService {
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  constructor(private readonly db: AngularFirestore) {
    this.itemsCollection = db.collection<any>("doctors");
    //  this.itemsCollection.valueChanges().subscribe(console.log);
  }

  getDoctors$() {
    return this.itemsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Doctor;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
