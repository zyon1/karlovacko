import { Component } from "@angular/core";
import { MatCarousel, MatCarouselComponent } from "@ngmodule/material-carousel";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  items: Array<any> = [];

  constructor() {
    this.items = [
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
  }
}
