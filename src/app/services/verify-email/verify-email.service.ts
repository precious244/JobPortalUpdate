import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  sendVerificationMail(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerEmail', body.jobseekerEmail);

    return this.http.post('http://54.255.4.75:9091/api/v1/jobseeker/resend', params);
  }
}
