import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

import { Report } from './report';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  baseUrl = environment.baseUrl;
  private uploadUrl = `${this.baseUrl}/report/generate`;
  private downloadUrl = `${this.baseUrl}/download`;
  private reportUrl = `${this.baseUrl}/report`;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getReport(): Observable<Report[]>{
    return this.http.get<Report[]>(this.reportUrl, this.auth.getHeader());
  }

  downloadReport(){
    return this.http.get(this.downloadUrl, this.auth.getHeader());
  }

  generateReport(){
    return this.http.post(this.uploadUrl,this.auth.getHeader());
  }

}
