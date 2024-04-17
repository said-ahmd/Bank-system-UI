import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  set token(token: string){
    localStorage.setItem('token', token);
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  decodeToken(): any {
    const token = this.token;
    try {
      return this.parseJwt(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  private parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
}
