import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-doctor-signup",
  templateUrl: "./doctor-signup.component.html",
  styleUrls: ["./doctor-signup.component.scss"]
})
export class DoctorSignupComponent implements OnInit {
  doctorSignupForm: FormGroup;
  locationSelected = false;
  lat: number = 44.112877;
  lng: number = 15.227476;
  zoom = 15;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.generateForm();
  }
  generateForm() {
    this.doctorSignupForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      age: "",
      specialization: ["", Validators.required],
      companyName: ["", Validators.required],
      companyAddress: ["", Validators.required],
      // oib: ["", Validators.required],
      working_hours: this.fb.group({
        from: ["", Validators.required],
        to: ["", Validators.required]
      })
    });
  }
  resetForm() {
    this.doctorSignupForm.setValue({
      firstName: "",
      lastName: "",
      age: "",
      specialization: "",
      companyName: "",
      companyAddress: "",
      oib: "",
      email: "",
      password: "",
      address: "",
      description: "",
      working_hours: {
        from: "",
        to: ""
      }
    });
  }
  onSubmit() {
    console.log(
      "submitted",
      this.doctorSignupForm.valid,
      this.doctorSignupForm.errors
    );
    if (this.doctorSignupForm.valid && this.locationSelected) {
      console.log("form valid");
      this.userService
        .createDoctor(
          Object.assign(this.doctorSignupForm.value, {
            location: { lat: this.lat, lng: this.lng }
          })
        )
        .then(() => {
          this.router.navigate(["/dashboard"]);
        });
    }
  }
  selectLocation($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.locationSelected = true;
    console.log("locationSelected");
  }
}
