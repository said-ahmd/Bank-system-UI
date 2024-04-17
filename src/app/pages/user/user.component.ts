import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AccountControlerService} from "../../services/services/account-controler.service";
import {AccountResponse} from "../../services/models/account-response";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  accounts: AccountResponse[]= [];
  errorMessage: string ='';
  constructor(
    private router:Router,
    private accountService: AccountControlerService

  ){}

    listMyAccounts(){
      this.accountService.getUserAccounts()
        .subscribe({
          next: (res)=>{
            if (res instanceof Blob && res.type === 'application/json'){
              res.text().then((text)=>{
                const jsonResponse = JSON.parse(text);
                this.accounts = jsonResponse;
              });
            }
          },
          error: (err)=>{
            this.errorMessage = 'Error fetching accounts.';
          }
        })
    }
 }

