import { Component, OnInit } from "@angular/core";
import { DoctorsService } from "../doctors.service";
import { Observable } from "rxjs";
import { Doctor } from "../doctor";
import { TicektStatus } from "../ticket";
import { TicketsService } from "../tickets.service";
import { PriceListService, Price } from "../price-list.service";

@Component({
  selector: "app-doctor-search",
  templateUrl: "./doctor-search.component.html",
  styleUrls: ["./doctor-search.component.scss"]
})
export class DoctorSearchComponent implements OnInit {
  doctors$: Observable<Doctor[]>;
  price$;
  constructor(
    private doctorsService: DoctorsService,
    private ticketService: TicketsService,
    private priceListService: PriceListService
  ) {
    this.doctors$ = this.doctorsService.getDoctors$();
    this.price$ = this.priceListService.prices$;
    //

    this.doctors$.subscribe(console.log);
    this.price$.subscribe(console.log);
  }

  ngOnInit() {}
  requestAppointment(id) {
    this.ticketService.createTicket(id).then(console.log);
  }
}
