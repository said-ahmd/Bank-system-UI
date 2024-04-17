/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountActivityResponse } from '../../models/account-activity-response';

export interface DeActivateMyAccoutn1$Params {
  cardNumber: string;
}

export function deActivateMyAccoutn1(http: HttpClient, rootUrl: string, params: DeActivateMyAccoutn1$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountActivityResponse>> {
  const rb = new RequestBuilder(rootUrl, deActivateMyAccoutn1.PATH, 'put');
  if (params) {
    rb.path('cardNumber', params.cardNumber, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AccountActivityResponse>;
    })
  );
}

deActivateMyAccoutn1.PATH = '/bank/account/{cardNumber}';
