import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TicketsService } from "../tickets.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"]
})
export class ScheduleComponent implements OnInit {
  scheduleForm: FormGroup;

  times = Array.from(Array(16).keys()).map(x => {
    return x % 2 ? `${7 + x / 2 + 0.5}:30` : `${8 + x / 2}:00`;
  });

  constructor(private fb: FormBuilder, private ticketService: TicketsService) {
    this.buildForm();
  }

  ngOnInit() {
    this.scheduleForm.valueChanges.subscribe(val => {
      this.ticketService.dateIssued = val;
    });
  }
  buildForm() {
    this.scheduleForm = this.fb.group({
      date: ["", Validators.required],
      time: ["", Validators.required]
    });
  }
}
