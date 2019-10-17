import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up-user",
  templateUrl: "./sign-up-user.component.html",
  styleUrls: ["./sign-up-user.component.scss"]
})
export class SignUpUserComponent implements OnInit {
  userSignupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userSignupForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    });
  }
  resetForm() {
    this.userSignupForm.setValue({ firstName: "", lastName: "" });
  }
  onSubmit() {
    if (this.userSignupForm.valid) {
      this.userService.createUser(this.userSignupForm.value).then(() => {
        this.router.navigate(["/dashboard"]);
      });
    }
  }
}
