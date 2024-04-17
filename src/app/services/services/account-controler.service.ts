/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AccountActivityResponse } from '../models/account-activity-response';
import { AccountResponse } from '../models/account-response';
import { AccountTransactionsHistoryResponseDto } from '../models/account-transactions-history-response-dto';
import { createAccount } from '../fn/account-controler/create-account';
import { CreateAccount$Params } from '../fn/account-controler/create-account';
import { deActivateMyAccoutn1 } from '../fn/account-controler/de-activate-my-accoutn-1';
import { DeActivateMyAccoutn1$Params } from '../fn/account-controler/de-activate-my-accoutn-1';
import { getAccountHistory } from '../fn/account-controler/get-account-history';
import { GetAccountHistory$Params } from '../fn/account-controler/get-account-history';
import { getUserAccounts } from '../fn/account-controler/get-user-accounts';
import { GetUserAccounts$Params } from '../fn/account-controler/get-user-accounts';

@Injectable({ providedIn: 'root' })
export class AccountControlerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `deActivateMyAccoutn1()` */
  static readonly DeActivateMyAccoutn1Path = '/bank/account/{cardNumber}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deActivateMyAccoutn1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deActivateMyAccoutn1$Response(params: DeActivateMyAccoutn1$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountActivityResponse>> {
    return deActivateMyAccoutn1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deActivateMyAccoutn1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deActivateMyAccoutn1(params: DeActivateMyAccoutn1$Params, context?: HttpContext): Observable<AccountActivityResponse> {
    return this.deActivateMyAccoutn1$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountActivityResponse>): AccountActivityResponse => r.body)
    );
  }

  /** Path part for operation `getUserAccounts()` */
  static readonly GetUserAccountsPath = '/bank/account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserAccounts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAccounts$Response(params?: GetUserAccounts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AccountResponse>>> {
    return getUserAccounts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserAccounts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserAccounts(params?: GetUserAccounts$Params, context?: HttpContext): Observable<Array<AccountResponse>> {
    return this.getUserAccounts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AccountResponse>>): Array<AccountResponse> => r.body)
    );
  }

  /** Path part for operation `createAccount()` */
  static readonly CreateAccountPath = '/bank/account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  createAccount$Response(params?: CreateAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountResponse>> {
    return createAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createAccount(params?: CreateAccount$Params, context?: HttpContext): Observable<AccountResponse> {
    return this.createAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountResponse>): AccountResponse => r.body)
    );
  }

  /** Path part for operation `getAccountHistory()` */
  static readonly GetAccountHistoryPath = '/bank/account/{accountId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountHistory$Response(params: GetAccountHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AccountTransactionsHistoryResponseDto>>> {
    return getAccountHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAccountHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountHistory(params: GetAccountHistory$Params, context?: HttpContext): Observable<Array<AccountTransactionsHistoryResponseDto>> {
    return this.getAccountHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AccountTransactionsHistoryResponseDto>>): Array<AccountTransactionsHistoryResponseDto> => r.body)
    );
  }

}
