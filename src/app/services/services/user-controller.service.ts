/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deactivateMyUser } from '../fn/user-controller/deactivate-my-user';
import { DeactivateMyUser$Params } from '../fn/user-controller/deactivate-my-user';
import { getAllUsers } from '../fn/user-controller/get-all-users';
import { GetAllUsers$Params } from '../fn/user-controller/get-all-users';
import { getUserInfo } from '../fn/user-controller/get-user-info';
import { GetUserInfo$Params } from '../fn/user-controller/get-user-info';
import { UserActivityResponse } from '../models/user-activity-response';
import { UserResponse } from '../models/user-response';

@Injectable({ providedIn: 'root' })
export class UserControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUserInfo()` */
  static readonly GetUserInfoPath = '/bank/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserInfo$Response(params?: GetUserInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
    return getUserInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserInfo(params?: GetUserInfo$Params, context?: HttpContext): Observable<UserResponse> {
    return this.getUserInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponse>): UserResponse => r.body)
    );
  }

  /** Path part for operation `deactivateMyUser()` */
  static readonly DeactivateMyUserPath = '/bank/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deactivateMyUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deactivateMyUser$Response(params?: DeactivateMyUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserActivityResponse>> {
    return deactivateMyUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deactivateMyUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deactivateMyUser(params?: DeactivateMyUser$Params, context?: HttpContext): Observable<UserActivityResponse> {
    return this.deactivateMyUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserActivityResponse>): UserActivityResponse => r.body)
    );
  }

  /** Path part for operation `getAllUsers()` */
  static readonly GetAllUsersPath = '/bank/user/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers$Response(params?: GetAllUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponse>>> {
    return getAllUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers(params?: GetAllUsers$Params, context?: HttpContext): Observable<Array<UserResponse>> {
    return this.getAllUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserResponse>>): Array<UserResponse> => r.body)
    );
  }

}
