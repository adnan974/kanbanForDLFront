import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "./../../../environments/environment"

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginData: any): Observable<any>{
    return this.http.post(`${environment.BASE_URL}/signin`, loginData)
  }

  register(registerData: any): Observable<any>{
    return this.http.post(`${environment.BASE_URL}/signup`, registerData)
  }
}
