import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginRequest} from "../../dtos/login-request.dto";
import {RegisterRequest} from "../../dtos/register-request.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:8080/auth";

  constructor(private http: HttpClient) { }

  /**
   *  Observables<any> is what the server side returns
   */

  // Login
  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginRequest);
  }

  // Register
  register(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registerRequest);
  }

  // Logout
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('roles');
  }

}
