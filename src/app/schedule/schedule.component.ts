import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"]
})
export class ScheduleComponent implements OnInit {
  times = Array.from(Array(16).keys()).map(x => {
    return x % 2 ? `${7 + x / 2 + 0.5}:30` : `${8 + x / 2}:00`;
  });

  constructor() {}

  ngOnInit() {}
}
