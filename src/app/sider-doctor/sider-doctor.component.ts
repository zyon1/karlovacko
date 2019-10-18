import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sider-doctor",
  templateUrl: "./sider-doctor.component.html",
  styleUrls: ["./sider-doctor.component.scss"]
})
export class SiderDoctorComponent implements OnInit {
  links = [
    { name: "Dashboard", link: "/doctor-dash", active: true },
    { name: "Catalog", link: "catalog", active: false },
    { name: "Calendar", link: "calendar", active: false },
    { name: "ReservationList", link: "reservations", active: false },
    { name: "Requests", link: "requests", active: false },
    { name: "Report", link: "report", active: false }
  ];
  constructor() {}

  ngOnInit() {}
}
