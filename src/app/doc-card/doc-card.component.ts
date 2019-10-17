import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-doc-card",
  templateUrl: "./doc-card.component.html",
  styleUrls: ["./doc-card.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DocCardComponent implements OnInit {
  lat: number = 44.112877;
  lng: number = 15.227476;
  zoom = 15;
  constructor() {}

  ngOnInit() {}
}
