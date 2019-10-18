import { Component, OnInit, Input } from "@angular/core";
import { ITicket } from "../ticket";
import { TicketsService } from "../tickets.service";
import { UserService } from "../user.service";

@Component({
  selector: "app-events-user",
  templateUrl: "./events-user.component.html",
  styleUrls: ["./events-user.component.scss"]
})
export class EventsUserComponent implements OnInit {
  @Input() ticket: ITicket;
  tickets$;
  user$;
  constructor(
    private ticketsService: TicketsService,
    private userService: UserService
  ) {
    /*     this.user$ = this.userService.getDoctor$();
     */
  }

  ngOnInit() {
    /* this.userService.getDoctor$().subscribe();
    this.tickets$ = this.ticketsService.getTicket$();
    this.tickets$.subscribe(console.log); */
  }
}
