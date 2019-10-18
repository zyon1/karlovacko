import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export enum TicektStatus {
  Request = 0,
  Approved = 1,
  Pending = 2,
  InProgress = 3,
  Blocked = 4,
  Completed = 5
}
export interface ITicket {
  status: TicektStatus;
  patientId: string;
  doctorId: string;
  communicationId?: string;
  dateCreated: number;
  dateIssued?: number;
  basket?: BasketItem[];
}
export interface BasketItem {
  name: string;
  price: number;
  duration: number;
  quantity: string;
}
/*
export class Ticket implements ITicket {
  id;
  status: TicektStatus;
  patientId: string;
  doctorId: string;
  communicationId?: string;
  dateCreated: number;
  dateIssued?: number;
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

  //user methods
  createTicket(docId) {
    const ticket: ITicket = {
      status: TicektStatus.Request,
      patientId: this.authService.user.uid,
      dateCreated: new Date().getTime(),
      doctorId: docId
    };

    this.id = this.db.createId();
    this.ticketsCollection.doc(this.id).set(ticket);
    this.userTicketsCollection
      .doc(this.authService.user.uid)
      .update({ [this.id]: true });
    this.doctorTicketsCollection.doc(docId).update({ [this.id]: true });
  }

  getTicket$(id) {
    return this.db.doc<Ticket>(`tickets/${id}`).valueChanges();
  }

  //doc methods
  acceptTicket() {}
}
*/
