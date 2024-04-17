import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AccountControlerService} from "../../services/services/account-controler.service";
import {AccountResponse} from "../../services/models/account-response";
import {NgForOf, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

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

  accounts: any[]= [];
  errorMessage: string ='';
  constructor(private http: HttpClient){

  }
  ngOnInit():void
  {

  }

    listMyAccounts() {
      debugger;
        this.http.get('http://localhost:8081/bank/account').subscribe((res:any)=>{
          this.accounts= res.data;
          console.log(this.accounts)
        },error => {
          alert("error from api")
        })
      }
 }

