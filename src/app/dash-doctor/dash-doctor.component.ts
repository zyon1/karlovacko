import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { flatMap } from "rxjs/operators";
@Component({
  selector: "app-dash-doctor",
  templateUrl: "./dash-doctor.component.html",
  styleUrls: ["./dash-doctor.component.scss"]
})
export class DashDoctorComponent implements OnInit {
  user$;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.user$ = this.userService.getDoctor$();
  }

  ngOnInit() {
    this.userService.getDoctor$().subscribe();
  }
  logout() {
    this.authService.logout().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["/auth"]);
    });
  }
}
