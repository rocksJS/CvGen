import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICredentials } from '../../interfaces/credential.interface';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private readonly endPoints = {
    auth: '/api/auth/local',
  };

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  login(credentials: ICredentials) {
    return this.http.post(environment.apiUrl + this.endPoints.auth, credentials).pipe(
      map((response: any) => {
        this.router.navigateByUrl('/');
        this.authService.saveToken(response.jwt);
        return response;
      })
    );
  }
}
