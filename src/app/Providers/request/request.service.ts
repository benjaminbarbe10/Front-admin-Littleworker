import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Shaper } from '../../types/shaper';
import {
  SHAPERS_ROUTES,
} from '../routes-config';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api_url;
  }

  public getShapers() {
    return this.http.get(this.baseUrl + 'shapers').toPromise();
  }
  public getProjects() {
    return this.http.get(this.baseUrl + 'projects').toPromise();
  }
}
