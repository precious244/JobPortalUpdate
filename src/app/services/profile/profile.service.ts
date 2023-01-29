import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  urlCityCountry :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

  constructor(private http: HttpClient) { }

  allCountries(): Observable<any>{
    return this.http.get("assets/Contries.json");
  }

  public getUserProfile(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/user', { params: params });
  }

  public getUserSkills(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/detail/get-skill', { params: params });
  }

  public getAllSkills(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/get-skill';
    return this.http.get(url);
  }

  public getAllUniversity(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/education/get-university';
    return this.http.get(url);
  }

  public getAllDegree(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/education/get-degree';
    return this.http.get(url);
  }

  public getAllMajor(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/education/get-major';
    return this.http.get(url);
  }

  public addSalary(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId)
      .set('currentCurrency', body.currentCurrency)
      .set('expectedCurrency', body.expectedCurrency)
      .set('currentSalary', body.currentSalary)
      .set('expectedMinimum', body.expectedMinimum)
      .set('expectedMaximum', body.expectedMaximum);

    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/detail/salary', params);
  }
  
  public editSkill(body: any): Observable<any> {
    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/add/skill', body);
  }

  editProfile(body: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobseekerId", body.jobseekerId)
    formData.append("jobseekerFirstName", body.jobseekerFirstName)
    formData.append("jobseekerLastName", body.jobseekerLastName)
    formData.append("countryId", body.countryId)
    formData.append("cityId", body.cityId)
    formData.append("jobseekerPhone", body.jobseekerPhone)
    formData.append("jobseekingStatus", body.jobseekingStatus)
    formData.append("jobseekerProfession", body.jobseekerProfession)
    formData.append("jobseekerPortfolio", body.jobseekerPortfolio)
    formData.append("jobseekerFacebook", body.jobseekerFacebook)
    formData.append("jobseekerTwitter", body.jobseekerTwitter)
    formData.append("jobseekerInstagram", body.jobseekerInstagram)
    formData.append("jobseekerLinkedin", body.jobseekerLinkedin);
    return this.http.patch('http://54.251.83.205:9091/api/v1/jobseeker/update/profile/', formData);
  }

  public getCountryList(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/get-country-list';
    return this.http.get(url);
  }

  public getCityList(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('countryId', body);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/get-city', { params: params });
  }

  deleteImage(body: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobseekerId", body.jobseekerId);
    return this.http.patch('http://54.251.83.205:9091/api/v1/jobseeker/delete/image/', formData)
  }

  addEducation(body: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobseekerId", body.jobseekerId)
    formData.append("schoolUniversity", body.schoolUniversity)
    formData.append("degreeName", body.degreeName)
    formData.append("majorName", body.majorName)
    formData.append("startPeriodMonth", body.startPeriodMonth)
    formData.append("endPeriodMonth", body.endPeriodMonth)
    formData.append("startPeriodYear", body.startPeriodYear)
    formData.append("endPeriodYear", body.endPeriodYear)
    formData.append("gradePointMax", body.gradePointMax)
    formData.append("educationDescription", body.educationDescription)
    formData.append("gradePoint", body.gradePoint)
    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/create/education', formData);
  }

  updateEducation(body: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobseekerId", body.jobseekerId)
    formData.append("educationId", body.educationId)
    formData.append("schoolUniversity", body.schoolUniversity)
    formData.append("degreeName", body.degreeName)
    formData.append("majorName", body.majorName)
    formData.append("startPeriodMonth", body.startPeriodMonth)
    formData.append("endPeriodMonth", body.endPeriodMonth)
    formData.append("startPeriodYear", body.startPeriodYear)
    formData.append("endPeriodYear", body.endPeriodYear)
    formData.append("gradePointMax", body.gradePointMax)
    formData.append("educationDescription", body.educationDescription)
    formData.append("gradePoint", body.gradePoint)
    return this.http.patch('http://54.251.83.205:9091/api/v1/jobseeker/update/education', formData);
  }

  public getEduList(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/education/list', { params: params });
  }

  public getEduDetail(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId)
      .set('educationId', body.educationId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/education/detail', { params: params });
  }

  deleteEdu(body: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobseekerId", body.jobseekerId);
    formData.append("educationId", body.educationId);
    return this.http.patch('http://54.251.83.205:9091/api/v1/jobseeker/delete/education/', formData)
  }
  
  public getAllJobType(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/experience/get-job-type';
    return this.http.get(url);
  }

  public getAllJobFunction(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/experience/get-job-function';
    return this.http.get(url);
  }

  public getAllCompanyList(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/experience/get-company-list';
    return this.http.get(url);
  }

  public getExpList(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/experience/list', { params: params });
  }

  public getExpDetail(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId)
      .set('experienceId', body.experienceId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/experience/detail', { params: params });
  }

  deleteExp(body: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobseekerId", body.jobseekerId);
    formData.append("experienceId", body.experienceId);
    return this.http.patch('http://54.251.83.205:9091/api/v1/jobseeker/delete/experience', formData)
  }

  editExp(body: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobseekerId", body.jobseekerId)
    formData.append("jobTitle", body.jobTitle)
    formData.append("jobFunctionId", body.jobFunctionId)
    formData.append("companyName", body.companyName)
    formData.append("jobTypeId", body.jobTypeId)
    formData.append("countryId", body.countryId)
    formData.append("cityId", body.cityId)
    formData.append("startPeriodMonth", body.startPeriodMonth)
    formData.append("endPeriodMonth", body.endPeriodMonth)
    formData.append("startPeriodYear", body.startPeriodYear)
    formData.append("endPeriodYear", body.endPeriodYear)
    formData.append("jobDescription", body.jobDescription)
    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/create/experience', formData);
  }

  updateExp(body: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobseekerId", body.jobseekerId)
    formData.append("experienceId", body.experienceId)
    formData.append("jobTitle", body.jobTitle)
    formData.append("jobFunctionId", body.jobFunctionId)
    formData.append("companyName", body.companyName)
    formData.append("jobTypeId", body.jobTypeId)
    formData.append("countryId", body.countryId)
    formData.append("cityId", body.cityId)
    formData.append("startPeriodMonth", body.startPeriodMonth)
    formData.append("endPeriodMonth", body.endPeriodMonth)
    formData.append("startPeriodYear", body.startPeriodYear)
    formData.append("endPeriodYear", body.endPeriodYear)
    formData.append("jobDescription", body.jobDescription)
    return this.http.patch('http://54.251.83.205:9091/api/v1/jobseeker/update/experience/', formData);
  }
}
