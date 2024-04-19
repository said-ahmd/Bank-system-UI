import { Component } from '@angular/core';
import {AccountControlerService} from "../../../../services/services/account-controler.service";
import {Router} from "@angular/router";
import {response} from "express";
import {AccountResponse} from "../../../../services/models/account-response";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-creat-account',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './creat-account.component.html',
  styleUrl: './creat-account.component.css'
})
export class CreatAccountComponent {

  accoutCreationRsponse: AccountResponse ={};
  constructor(
    private accountService: AccountControlerService,
    private router:Router
  ) {
  }
  createAccount(){
    this.accountService.createAccount()
      .subscribe({
      next:(accountResponse)=>{
       if (accountResponse instanceof Blob && accountResponse.type==='application/json'){
         accountResponse.text().then((text)=>{
           const jsonResponse = JSON.parse(text);
           this.accoutCreationRsponse = jsonResponse;
         })
       }
      },
        error:(err)=> {
        console.log("here");
            this.router.navigate(['login'])
        }
      });

  }
}
