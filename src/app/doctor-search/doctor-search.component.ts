import { Component, OnInit } from "@angular/core";
import { DoctorsService } from "../doctors.service";
import { Observable } from "rxjs";
import { Doctor } from "../doctor";

@Component({
  selector: "app-doctor-search",
  templateUrl: "./doctor-search.component.html",
  styleUrls: ["./doctor-search.component.scss"]
})
export class DoctorSearchComponent implements OnInit {
  doctors$: Observable<Doctor[]>;
  constructor(private doctorsService: DoctorsService) {
    this.doctors$ = this.doctorsService.getDoctors$();
    //
    this.doctors$.subscribe(console.log);
  }

  ngOnInit() {}
  requestAppointment(id) {
    console.log(id);
  }
}
