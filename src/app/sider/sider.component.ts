import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sider",
  templateUrl: "./sider.component.html",
  styleUrls: ["./sider.component.scss"]
})
export class SiderComponent implements OnInit {
  links = [
    { name: "Dashboard", link: "/dashboard", active: true },
    { name: "Search", link: "/dashboard/search", active: false },
    { name: "Calendar", link: "/dashboard/calendar", active: false },
    { name: "My event", link: "/dashboard/my-events", active: false },
    { name: "Favorites", link: "/dashboard/favorites", active: false },
    { name: "History", link: "/dashboard/history", active: false }
  ];
  constructor() {}

  ngOnInit() {}
}
