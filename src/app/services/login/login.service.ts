import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public postLogin(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerEmail', body.jobseekerEmail)
      .set('jobseekerPassword', body.jobseekerPassword);

    return this.http.post('http://54.255.4.75:9091/api/v1/jobseeker/login', params);
  }

  public forgotPassword(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerEmail', body.jobseekerEmail);

    return this.http.post('http://54.255.4.75:9091/api/v1/jobseeker/reset', params);
  }

  public changePassword(body: any): Observable<any> {
    const params = new HttpParams()
      .set('email', body.email)
      .set('password', body.password)
      .set('confirmPassword', body.confirmPassword);

    return this.http.post('http://54.255.4.75:9091/api/v1/jobseeker/change-password', params);
  }

  saveChangePasswordData(data: any) {
    sessionStorage.setItem('change-password', JSON.stringify(data))
  }

  public getUserProfile(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.255.4.75:9091/api/v1/jobseeker/user', { params: params });
  }
}
