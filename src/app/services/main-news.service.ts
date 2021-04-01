import {Injectable} from '@angular/core';
import {ApiClientService} from './api-client.service';
import {FormContainer} from '../models/model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainNewsService {

  constructor(private apiClient: ApiClientService) {
  }

  getFeedNews(fc: FormContainer, id): Observable<any> {
    return this.apiClient.get(`friends/${id}`, fc, null);
  }
}
