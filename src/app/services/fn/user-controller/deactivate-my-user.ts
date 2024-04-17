/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserActivityResponse } from '../../models/user-activity-response';

export interface DeactivateMyUser$Params {
}

export function deactivateMyUser(http: HttpClient, rootUrl: string, params?: DeactivateMyUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserActivityResponse>> {
  const rb = new RequestBuilder(rootUrl, deactivateMyUser.PATH, 'put');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserActivityResponse>;
    })
  );
}

deactivateMyUser.PATH = '/bank/user';
