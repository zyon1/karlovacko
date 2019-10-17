import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sider",
  templateUrl: "./sider.component.html",
  styleUrls: ["./sider.component.scss"]
})
export class SiderComponent implements OnInit {
  links = [
    { name: "Upravljačka ploča", link: "/dashboard", active: true },
    { name: "Pretraga", link: "search", active: false },
    { name: "Calendar", link: "calendar", active: false },
    { name: "Moji događaji", link: "my-events", active: false },
    { name: "Favoriti", link: "favorites", active: false },
    { name: "History", link: "history", active: false }
  ];
  constructor() {}

  ngOnInit() {}
}
