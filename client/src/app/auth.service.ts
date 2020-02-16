import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import config from './config';
import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<ApiResponse>(`${config.api_url}/auth/login`, { username, password })
      .pipe(map(res => {
        if (res?.success) {
          localStorage.setItem('token', res.token);
        }

        return res;
      }));
  }

  logout() {
    localStorage.removeItem('token');
  }
}
