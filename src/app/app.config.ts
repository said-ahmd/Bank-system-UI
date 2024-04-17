import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http"; // Import withFetch

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { custom2Interceptor} from "./pages/service/custom2.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()),provideHttpClient(withInterceptors([custom2Interceptor]))] // Add withFetch() here

};
