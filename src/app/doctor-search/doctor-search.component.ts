import { Component, OnInit } from "@angular/core";
import { DoctorsService } from "../doctors.service";

@Component({
  selector: "app-doctor-search",
  templateUrl: "./doctor-search.component.html",
  styleUrls: ["./doctor-search.component.scss"]
})
export class DoctorSearchComponent implements OnInit {
  doctors$;
  constructor(private doctorsService: DoctorsService) {
    this.doctors$ = this.doctorsService.getDoctors$();
    //.subscribe(console.log);
  }

  ngOnInit() {}
  requestAppointment() {}
}
