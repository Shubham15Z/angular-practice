import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableServiceService {
  private apiUrl = ("https://jsonplaceholder.typicode.com/users");

  constructor(private http: HttpClient) { }

  getDataWithObservable(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
