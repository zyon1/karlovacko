import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { UserGuard } from "./user.guard";
import { DashMainComponent } from "./dash-main/dash-main.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [AuthGuard]
  },
  { path: "auth", component: SignInComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard, UserGuard],
    children: [{ path: "", component: DashMainComponent }]
  }
  /*{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
