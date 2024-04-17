import { HttpInterceptorFn } from '@angular/common/http';

export const custom2Interceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const myToken = localStorage.getItem('token');
  const cloneRequest = req.clone({
    setHeaders:{
      Authorization: `Bearer ${myToken}`
    }
  })
  return next(cloneRequest);
};
