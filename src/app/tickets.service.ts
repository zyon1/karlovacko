import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { TicektStatus, ITicket } from "./ticket";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TicketsService {
  id;
  status: TicektStatus;
  patientId: string;
  doctorId: string;
  communicationId?: string;
  dateCreated: number;
  dateIssued?: any;
  basket: any;
  private ticketDoc: AngularFirestoreDocument;
  private ticketsCollection: AngularFirestoreCollection;
  tickets$;
  private userTicketsCollection: AngularFirestoreCollection;
  private doctorTicketsCollection: AngularFirestoreCollection;
  constructor(private db: AngularFirestore, private authService: AuthService) {
    this.ticketsCollection = this.db.collection("tickets");
    this.tickets$ = this.ticketsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
    this.userTicketsCollection = this.db.collection("userTickets");
    this.doctorTicketsCollection = this.db.collection("doctorTickets");

    this.status = TicektStatus.Request;
  }
  createTicket(docId) {
    const ticket: ITicket = {
      status: TicektStatus.Request,
      patientId: this.authService.user.uid,
      dateCreated: new Date().getTime(),
      doctorId: docId,
      basket: this.basket,
      dateIssued: this.dateIssued
    };

    this.status = ticket.status;
    this.patientId = ticket.patientId;
    this.dateCreated = ticket.dateCreated;
    this.doctorId = ticket.doctorId;
    this.id = this.db.createId();
    this.userTicketsCollection
      .doc(this.authService.user.uid)
      .set({ [this.id]: true });
    this.doctorTicketsCollection.doc(docId).set({ [this.id]: true });
    return this.ticketsCollection.doc(this.id).set(ticket);
  }

  getTicket$(id) {
    return this.db.doc<ITicket>(`tickets/${id}`).valueChanges();
  }

  //doc methods
  acceptTicket() {}
}
