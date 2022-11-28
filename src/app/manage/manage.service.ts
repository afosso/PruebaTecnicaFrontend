import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getBrands() : Observable<any> {
    return this.http.get<any>(`${environment.urlbackend}brand`, {headers: this.headers});
  }

  getBrandById(id: any) : Observable<any> {
    return this.http.get<any>(`${environment.urlbackend}brand/1`, {headers: this.headers});
  }

  save(id: any, data: any) : Observable<any> {
    if (id && id != 0) {
      return this.http.put<any>(`${environment.urlbackend}brand/1`, JSON.stringify(data), {headers: this.headers});
    }
    return this.http.post<any>(`${environment.urlbackend}brand`, JSON.stringify(data), {headers: this.headers});
  }

  delete(id: any) : Observable<any> {
    return this.http.delete<any>(`${environment.urlbackend}brand/${id}`, {headers: this.headers});
  }

}
