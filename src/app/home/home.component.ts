import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  items = [
    {
      name: "../assets/images/dental.jpg"
    },
    {
      name: "../assets/images/downloa.jpeg"
    },
    {
      name: "../assets/images/download.jpeg"
    },
    {
      name: "../assets/images/dental.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
