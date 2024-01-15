import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  sendCredentials(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.URL}/auth/login`, { email, password });
  }
}
