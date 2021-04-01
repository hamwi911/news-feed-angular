import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {FormContainer} from '../models/model';
import {ServiceTools} from '../models/serviceTools';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) {
  }

  getHeaders(config?: ApiConfig): HttpHeaders {
    if (this.getCurrentAuthToken()) {
      return new HttpHeaders({
        Authorization: this.getCurrentAuthToken(),
      });
    }
  }

  getCurrentAuthToken(): string {
    return 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYXNhbiIsImlhdCI6MTYxNzExNjc3MywiZXhwIjoxNjE3MjAzMTczfQ.swo-q1uaEAT_0j5cf8ED5lIOeYe3_cGQpp7jGAUl-rNekjFlxFPsWBeKfW36iMIS7UAgcQBZ3S1JJIg8id0OGQ';
  }

  processResponse<T>(res: T, component: FormContainer): any {
    if (component) {
      component.isWorking = false;
    }
    return res;
  }

  processError(err: HttpErrorResponse, component: FormContainer): any {
    if (component) {
      component.isWorking = false;
    }
    if (component && component.handleError && component.handleError(err)) {
      return EMPTY;
    }
    return EMPTY;
  }

  post<T>(api: string, data: any, component: FormContainer, config?: ApiConfig): Observable<T> {
    if (component) {
      component.isWorking = true;
      component.fieldErrors = {};
    }
    return this.http.post<T>(ServiceTools.apiUrl + api, data, {
      headers: this.getHeaders(config),
      observe: 'response',
    })
      .pipe(
        map(res => this.processResponse(res.body, component)),
        catchError(err => this.processError(err, component)));
  }

  put<T>(api: string, data: any, component: FormContainer, config?: ApiConfig): Observable<T> {
    if (component) {
      component.isWorking = true;
      component.fieldErrors = {};
    }
    return this.http.put<T>(ServiceTools.apiUrl + api, data, {
      headers: this.getHeaders(config),
      observe: 'response',
    })
      .pipe(
        map(res => this.processResponse(res.body, component)),
        catchError(err => this.processError(err, component)));
  }

  get<T>(api: string, component: FormContainer, config?: ApiConfig): Observable<T> {
    if (component) {
      component.isWorking = true;
      component.fieldErrors = {};
    }
    return this.http.get<T>(ServiceTools.apiUrl + api, {
      headers: this.getHeaders(config),
      observe: 'response',
    })
      .pipe(
        map(res => this.processResponse(res.body, component)),
        catchError(err => this.processError(err, component)));
  }

  delete<T>(api: string, component: FormContainer, config?: ApiConfig): Observable<T> {
    if (component) {
      component.isWorking = true;
      component.fieldErrors = {};
    }
    return this.http.delete<T>(ServiceTools.apiUrl + api, {
      headers: this.getHeaders(config),
      observe: 'response',
    })
      .pipe(
        map(res => this.processResponse(res.body, component)),
        catchError(err => this.processError(err, component)));
  }
}

export interface ApiConfig {
  noAuth?: boolean;
  allowAnonymous: boolean;
}
