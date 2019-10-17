import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TooltipModule } from "ngx-bootstrap/tooltip";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { SignInComponent } from "./sign-in/sign-in.component";
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { AuthService } from "./auth.service";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { SignUpUserComponent } from "./sign-up-user/sign-up-user.component";
import { UserGuard } from "./user.guard";
import { SiderComponent } from "./sider/sider.component";
import { DashMainComponent } from "./dash-main/dash-main.component";
import { DoctorSignupComponent } from "./doctor-signup/doctor-signup.component";
import { SignupComponent } from "./signup/signup.component";
import { AgmCoreModule } from "@agm/core";
import { HomeComponent } from "./home/home.component";
import { DoctorSearchComponent } from "./doctor-search/doctor-search.component";
import { DocCardComponent } from "./doc-card/doc-card.component";
import { CalendarUserComponent } from './calendar-user/calendar-user.component';
import { EventsUserComponent } from './events-user/events-user.component';
import { FavoritUserComponent } from './favorit-user/favorit-user.component';
import { HistoryUserComponent } from './history-user/history-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    SignUpUserComponent,
    SiderComponent,
    DashMainComponent,
    DoctorSignupComponent,
    SignupComponent,
    HomeComponent,
    DoctorSearchComponent,
    DocCardComponent,
    CalendarUserComponent,
    EventsUserComponent,
    FavoritUserComponent,
    HistoryUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCarouselModule,
    TooltipModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey
    })
  ],
  providers: [AuthService, AuthGuard, UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
