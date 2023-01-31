import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
  }

  public getRecentJob(): Observable<any> {
    const url = 'http://54.255.4.75:9091/api/v1/jobseeker/recent';
    return this.http.get(url);
  }

  public getDetailJob(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobId', body.jobId)
      .set('jobStatus', body.jobStatus);
    return this.http.get('http://54.255.4.75:9091/api/v1/jobs/detail', { params: params });
  }

  public getAppliedJob(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId)
    return this.http.get('http://54.255.4.75:9091/api/v1/application/job/applied', { params: params });
  }

  public postCV(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId)
      .set('jobseekerResume', body.jobseekerResume);

    return this.http.post('http://54.255.4.75:9091/api/v1/jobseeker/user/update/resume', params);
  }

  public searchJobs(body: any): Observable<any> {
    const params = new HttpParams()
      .set('keyword', body.keyword)

    return this.http.get('http://54.255.4.75:9091/api/v1/jobseeker/search', { params: params });
  }

  putApplyJob(body: any, data: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobId", data.jobId)
    formData.append("jobseekerId", body.jobseekerId);
    return this.http.put('http://54.255.4.75:9091/api/v1/jobseeker/job/apply', formData);
  }

  public getAppliedDetailJob(body: any, data: any): Observable<unknown> {
    const params = new HttpParams()
    .set("jobseekerId", body.jobseekerId)
    .set("jobId", data.jobId);
    return this.http.get('http://54.255.4.75:9091/api/v1/application/job/applied/detail', { params: params });
  }
}
