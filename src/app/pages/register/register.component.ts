import { Component } from '@angular/core';
import {RegisterRequest} from "../../services/models/register-request";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { Router } from "@angular/router";
import {AuthenticationControllerService} from "../../services/services/authentication-controller.service";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private autgService: AuthenticationControllerService
  ) {
  }


  registerRequest: RegisterRequest = {firstName:"", lastName:"", email:"", password:"", phoneNumber:"", address:""}
  errorMessage: Array<string> = [];

  register(){

    this.errorMessage= [];

    this.autgService.register({
      body: this.registerRequest
    })
      .subscribe({
        next:()=>{
          this.router.navigate(['activate-code'])
        },
        error:(err)=>{
          err.error.text().then((errorMessage: string) => {
            const errorObj = JSON.parse(errorMessage);
            if (errorObj.validationErrors) {
              this.errorMessage = errorObj.validationErrors;
            } else {
              this.errorMessage.push(errorObj.error || 'Unknown error occurred.');
            }
          });
        }
      })
  }
  login(){

    this.router.navigate(['login'])
  }

}
