import {Component, OnInit} from '@angular/core';
import {TransactionControllerService} from "../../../../services/services/transaction-controller.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DepositRequest} from "../../../../services/models/deposit-request";

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent implements OnInit{

  // depositRsponse: string='';
  errorMessage: Array<string> = [];
  depositSuccess?: string;
  depositRequest :DepositRequest = {amount:0, cardNumber:''}

  constructor(
    private transactionService: TransactionControllerService
  ) {}

  ngOnInit(): void {
  }
  deoposit(){

    this.errorMessage = [];
    this.transactionService.deposit({body: this.depositRequest}).subscribe({
      next:(depositResponse:any) => {
        if (depositResponse instanceof Blob) {
          depositResponse.text().then((responseText: string) => {
            this.depositSuccess= responseText;
          });
        } else {
          console.log("Response is not a Blob");
        }
        },
      error:(err)=>{

        err.error.text().then((errorMessage:string)=>{
          const errorObj = JSON.parse(errorMessage);
          if (errorObj.validationErrors){
            this.errorMessage = errorObj.validationErrors;
          }
          else {
            this.errorMessage.push(errorObj.error || 'Unknown error occurred.');
          }
        });
      }
    });

  }
}
