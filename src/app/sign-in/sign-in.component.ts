import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = formBuilder.group({
      username: [
        "",
        Validators.compose([Validators.required, Validators.email])
      ],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {}

  login() {
    const credentials = this.loginForm.value;
    this.authService
      .login(credentials.username, credentials.password)
      .catch(err => {});
  }
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
  forgot() {}

  // resetPassword(){
  //   return this.afa.auth.sendPasswordResetEmail('davorzubak1@gmail.com')
  //     .then(() => console.log('email sent'))
  //     .catch((error) => console.log(error));
  // }

  getUsernameErrorMessage() {
    return this.loginForm.get("username").hasError("required")
      ? "You must enter a value"
      : this.loginForm.get("username").hasError("email")
      ? "Not a valid email"
      : "";
  }

  getPasswordErrorMessage() {
    return this.loginForm.get("password").hasError("required")
      ? "You must enter a value"
      : "";
  }
}
