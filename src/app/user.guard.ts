import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  ActivatedRoute
} from "@angular/router";
import { Observable, merge, combineLatest } from "rxjs";
import { UserService } from "./user.service";
import { map, flatMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(state, state.url.indexOf("/dashboard"));

    return combineLatest(
      this.userService.getUser$(),
      this.userService.getDoctor$()
    ).pipe(
      map(user => {
        if (user[1] || state.url.indexOf("/dashboard") === -1) {
          this.router.navigate(["/doctor-dash"]);
        }
        if (user[0] || user[1]) {
          return true;
        } else {
          console.log("user");
          this.router.navigate(["/signup"]);
        }
      })
    );
  }
}
