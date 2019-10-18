import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { TicektStatus, ITicket } from "./ticket";

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
  dateIssued?: number;
  basket: [];
  private ticketDoc: AngularFirestoreDocument;
  private ticketsCollection: AngularFirestoreCollection;
  private userTicketsCollection: AngularFirestoreCollection;
  private doctorTicketsCollection: AngularFirestoreCollection;
  constructor(private db: AngularFirestore, private authService: AuthService) {
    this.ticketsCollection = this.db.collection("tickets");
    this.userTicketsCollection = this.db.collection("userTickets");
    this.doctorTicketsCollection = this.db.collection("doctorTickets");

    this.status = TicektStatus.Request;
  }
  createTicket(docId) {
    const ticket: ITicket = {
      status: TicektStatus.Request,
      patientId: this.authService.user.uid,
      dateCreated: new Date().getTime(),
      doctorId: docId
    };
    this.status = ticket.status;
    this.patientId = ticket.patientId;
    this.dateCreated = ticket.dateCreated;
    this.doctorId = ticket.doctorId;
    this.id = this.db.createId();
    this.userTicketsCollection
      .doc(this.authService.user.uid)
      .update({ [this.id]: true });
    this.doctorTicketsCollection.doc(docId).update({ [this.id]: true });
    return this.ticketsCollection.doc(this.id).set(ticket);
  }

  getTicket$(id) {
    return this.db.doc<ITicket>(`tickets/${id}`).valueChanges();
  }

  //doc methods
  acceptTicket() {}
}
