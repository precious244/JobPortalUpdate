import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  saveRegisterData(userData: any) {
    sessionStorage.setItem('sign-up', JSON.stringify(userData))
  }

  loadUserData() {
    const registerData = sessionStorage.getItem('sign-up')
    return JSON.parse(registerData ? registerData : '');
  }

  isRegister() {
    const registerData = sessionStorage.getItem('sign-up')
    return registerData !== null;
  }

  public postRegister(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerFirstName', body.jobseekerFirstName)
      .set('jobseekerLastName', body.jobseekerLastName)
      .set('jobseekerEmail', body.jobseekerEmail)
      .set('jobseekerPassword', body.jobseekerPassword);

    return this.http.post('http://54.255.4.75:9091/api/v1/jobseeker/register', params);
  }
}
