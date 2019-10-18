import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sider",
  templateUrl: "./sider.component.html",
  styleUrls: ["./sider.component.scss"]
})
export class SiderComponent implements OnInit {
  links = [
    { name: "Dashboard", link: "/dashboard", active: true },
    { name: "Search", link: "search", active: false },
    { name: "Calendar", link: "calendar", active: false },
    { name: "My event", link: "my-events", active: false },
    { name: "Favorites", link: "favorites", active: false },
    { name: "History", link: "history", active: false }
  ];
  constructor() {}

  ngOnInit() {}
}
