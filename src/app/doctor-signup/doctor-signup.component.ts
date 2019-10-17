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
      age: [""],
      specialization: ["", Validators.required],
      companyName: ["", Validators.required],
      companyAddress: ["", Validators.required],
      oib: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      address: ["", Validators.required],
      description: ["", Validators.required],
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
      age: [""],
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
    if (this.doctorSignupForm.valid) {
      this.userService.createDoctor(this.doctorSignupForm.value).then(() => {
        this.router.navigate(["/dashboard"]);
      });
    }
  }
}
