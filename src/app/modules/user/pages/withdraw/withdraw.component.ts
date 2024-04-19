import { Component } from '@angular/core';
import {TransactionControllerService} from "../../../../services/services/transaction-controller.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {WithdrawRequest} from "../../../../services/models/withdraw-request";

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {
  errorMeassag: Array<string> =[]
  withdrawSuccess?:string;
  withdrawRequest: WithdrawRequest={amount:0,cardNumber:'',cvv:''};

  constructor(
    private withdrawService: TransactionControllerService
  ) {
  }
  withdraw(){
    this.errorMeassag=[];
    this.withdrawService.withdraw({body:this.withdrawRequest}).subscribe({
      next:(withdrawResponse:any)=>{
        if(withdrawResponse instanceof Blob){
          withdrawResponse.text().then((responseText)=>{
            this.withdrawSuccess = responseText;
          });
        }
      },
      error:(err)=>{
        err.error.text().then((errorMessage:string)=>{
          const errorObj = JSON.parse(errorMessage);
          if(errorObj.validationErrors){
            this.errorMeassag = errorObj.validationErrors;
          }else {
            this.errorMeassag.push(errorObj.error||'Unknown error occurred.')
          }
        })
    }
    })
  }
}
