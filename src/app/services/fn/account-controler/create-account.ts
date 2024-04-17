/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountResponse } from '../../models/account-response';

export interface CreateAccount$Params {
}

export function createAccount(http: HttpClient, rootUrl: string, params?: CreateAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountResponse>> {
  const rb = new RequestBuilder(rootUrl, createAccount.PATH, 'post');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AccountResponse>;
    })
  );
}

createAccount.PATH = '/bank/account';
