import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { flatMap } from "rxjs/operators";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  user$;
  value = "Enter text";
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.user$ = this.userService.getUser$();
  }

  ngOnInit() {
    this.userService.getUser$().subscribe();
  }
  logout() {
    this.authService.logout().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["/auth"]);
    });
  }
}
