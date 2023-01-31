import { Injectable } from '@angular/core';
import { weekInMs } from '../consts/time-in-ms.consts';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public getTokenExpirationDate(): string | null {
    return localStorage.getItem('tokenExpirationDate');
  }

  public logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationDate');
  }

  public saveToken(token: string): void {
    const expirationDate = Date.now() + weekInMs;

    localStorage.setItem('token', 'Bearer ' + token);
    localStorage.setItem('tokenExpirationDate', expirationDate.toString());
  }

  public isTokenExpired(): boolean {
    const expirationDate = this.getTokenExpirationDate();
    const currentDate = Date.now();

    if (expirationDate === null) {
      return true;
    } else {
      return currentDate > +expirationDate;
    }
  }
}
