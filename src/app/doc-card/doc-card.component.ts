import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { Doctor } from "../doctor";

@Component({
  selector: "app-doc-card",
  templateUrl: "./doc-card.component.html",
  styleUrls: ["./doc-card.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DocCardComponent implements OnInit {
  @Input() doctor: Doctor;
  locationSelected = false;
  lat: number = 44.112877;
  lng: number = 15.227476;
  zoom = 15;
  constructor() {}

  ngOnInit() {}
  selectLocation($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.locationSelected = true;
    console.log("locationSelected");
  }
}
