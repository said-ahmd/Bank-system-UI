/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountTransactionsHistoryResponseDto } from '../../models/account-transactions-history-response-dto';

export interface GetAccountHistory$Params {
  accountId: number;
}

export function getAccountHistory(http: HttpClient, rootUrl: string, params: GetAccountHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AccountTransactionsHistoryResponseDto>>> {
  const rb = new RequestBuilder(rootUrl, getAccountHistory.PATH, 'get');
  if (params) {
    rb.path('accountId', params.accountId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AccountTransactionsHistoryResponseDto>>;
    })
  );
}

getAccountHistory.PATH = '/bank/account/{accountId}';
