import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PriceListService {
  pricesCollection: AngularFirestoreCollection;
  prices$: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.pricesCollection = this.db.collection<Price[]>("Prices");
    this.prices$ = this.pricesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Price;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  addPrice(price: Price) {
    const ID = this.db.createId();
    this.pricesCollection.doc(ID).set(price);
  }
  getPrice$(id: string) {
    console.log(id);
    return this.pricesCollection.doc(id).get();
  }
}

export interface Price {
  name: string;
  price: number;
  duration: number;
}
