import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AccountControlerService} from "../../../../services/services/account-controler.service";
import {AccountResponse} from "../../../../services/models/account-response";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list-accounts',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './list-accounts.component.html',
  styleUrl: './list-accounts.component.css'
})
export class ListAccountsComponent implements OnInit{
  accounts: AccountResponse[]=[];

  constructor(
    private router:Router,
    private accoutService: AccountControlerService
  ) {
  }
  ngOnInit(): void {
    this.listAccounts()
  }

  listAccounts(){

    this.accoutService.getUserAccounts().subscribe({
      next:(result)=>{
        if(result instanceof Blob && result.type === 'application/json'){
          result.text().then((text)=>{
            const jsonResponse = JSON.parse(text);
            this.accounts = jsonResponse;
          })
        }
    },
    error:(error) => {
      this.router.navigate(['login'])
    }
      });

  }
}
