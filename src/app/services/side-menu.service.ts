import { Injectable } from '@angular/core';
import {ApiClientService} from './api-client.service';
import {Observable} from 'rxjs';
import {FormContainer} from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor(private apiClient: ApiClientService) { }

  getFriendsList(fc: FormContainer): Observable<any> {
      return this.apiClient.get('friends', fc, null);
  }
}
