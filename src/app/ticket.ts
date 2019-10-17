import { extend } from "webdriver-js-extender";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

export enum TicektStatus {
  Request = 0,
  Approved = 1,
  Pending = 2,
  InProgress = 3,
  Blocked = 4,
  Completed = 5
}
export interface Ticket {
  status: TicektStatus;
  patientId: string;
  doctorId: string;
  communicationId: string;
  dateCreated: number;
  dateIssued: number;
}
export class Ticket implements Ticket {
  status: TicektStatus;
  patientId: string;
  doctorId: string;
  communicationId: string;
  dateCreated: number;
  dateIssued: number;
  private ticketDoc: AngularFirestoreDocument;

  constructor(private db: AngularFirestore) {
    this.status = TicektStatus.Request;
  }
  getTicket(id) {
    return this.db.doc<Ticket>(`tickets/${id}`).valueChanges();
  }
  removeTicket() {}
}
