import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable, merge, combineLatest } from "rxjs";
import { UserService } from "./user.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return combineLatest(
      this.userService.getUser$(),
      this.userService.getDoctor$()
    ).pipe(
      map(user => {
        console.log(user);
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
