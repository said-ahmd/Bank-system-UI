/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deposit } from '../fn/transaction-controller/deposit';
import { Deposit$Params } from '../fn/transaction-controller/deposit';
import { withdraw } from '../fn/transaction-controller/withdraw';
import { Withdraw$Params } from '../fn/transaction-controller/withdraw';

@Injectable({ providedIn: 'root' })
export class TransactionControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `withdraw()` */
  static readonly WithdrawPath = '/bank/transaction/withdraw';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `withdraw()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  withdraw$Response(params: Withdraw$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return withdraw(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `withdraw$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  withdraw(params: Withdraw$Params, context?: HttpContext): Observable<string> {
    return this.withdraw$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deposit()` */
  static readonly DepositPath = '/bank/transaction/deposit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deposit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  deposit$Response(params: Deposit$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deposit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deposit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  deposit(params: Deposit$Params, context?: HttpContext): Observable<string> {
    return this.deposit$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
