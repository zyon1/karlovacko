import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { UserGuard } from "./user.guard";
import { DashMainComponent } from "./dash-main/dash-main.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { DoctorSearchComponent } from "./doctor-search/doctor-search.component";
import { CalendarUserComponent } from "./calendar-user/calendar-user.component";
import { FavoritUserComponent } from "./favorit-user/favorit-user.component";
import { HistoryUserComponent } from "./history-user/history-user.component";
import { DoctorDashMainComponent } from "./doctor-dash-main/doctor-dash-main.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { ReservationsComponent } from "./reservations/reservations.component";
import { RequestsComponent } from "./requests/requests.component";
import { ReportComponent } from "./report/report.component";
import { DashDoctorComponent } from "./dash-doctor/dash-doctor.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/auth",
    pathMatch: "full"
  },
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
    children: [
      { path: "", component: DashMainComponent },
      { path: "search", component: DoctorSearchComponent },
      { path: "calendar", component: CalendarUserComponent },
      { path: "favorit", component: FavoritUserComponent },
      { path: "history", component: HistoryUserComponent }
    ]
  },
  {
    path: "doctor-dash",
    component: DashDoctorComponent,
    canActivate: [AuthGuard, UserGuard],
    children: [
      { path: "", component: DoctorDashMainComponent },
      { path: "catalog", component: CatalogComponent },
      { path: "calendar", component: CalendarUserComponent },
      { path: "reservations", component: ReservationsComponent },
      { path: "requests", component: RequestsComponent },
      { path: "report", component: ReportComponent }
    ]
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
