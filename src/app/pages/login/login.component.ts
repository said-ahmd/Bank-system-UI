import { Component } from '@angular/core';
import {AtuthenticationRequest, AuthenticationResponse} from '../../services/models';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationControllerService } from "../../services/services/authentication-controller.service";
import { NgForOf, NgIf } from "@angular/common";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AtuthenticationRequest = {email: '', password: ''}
  errorMessage: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationControllerService,
    private tokenService: TokenService
  ) {}

  login(): void {
    this.errorMessage = [];

    this.authService.authenticate({
      body: this.authRequest
    })
      .subscribe({
        next: (res) => {

          if (res instanceof Blob && res.type === 'application/json') {
            res.text().then((text) => {

              const jsonResponse = JSON.parse(text);
              this.tokenService.token = jsonResponse.token;
// Decode the token and extract authority
              const decodedToken = this.tokenService.decodeToken();

              if (decodedToken && decodedToken.authorities) {
                  if (decodedToken.authorities == 'ADMIN'){
                    this.router.navigate(['admin'])
                  }
                  else{
                    this.router.navigate(['user'])
                  }
              }

            });
          }

        },
      error: (err) => {
        err.error.text().then((errorMessage: string) => {
          const errorObj = JSON.parse(errorMessage);
          if (errorObj.validationErrors) {
            this.errorMessage = errorObj.validationErrors;
          } else {
            this.errorMessage.push(errorObj.error || 'Unknown error occurred.');
          }
        });
      }
    });
  }

  register(): void {
    this.router.navigate(['register']);
  }
}
