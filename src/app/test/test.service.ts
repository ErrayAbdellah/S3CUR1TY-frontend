import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../_services/auth.service';


@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(private http :HttpClient ) { }

  getTest(): Observable<any> {
    return this.http.get('http://localhost:8081/api/test/test');
  }
}
