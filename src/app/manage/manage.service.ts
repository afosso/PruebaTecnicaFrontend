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

  save(id: any, data: any, url = "brand") : Observable<any> {
    if (id && id != 0) {
      return this.http.put<any>(`${environment.urlbackend}${url}/1`, JSON.stringify(data), {headers: this.headers});
    }
    return this.http.post<any>(`${environment.urlbackend}${url}`, JSON.stringify(data), {headers: this.headers});
  }

  delete(id: any, url = "brand") : Observable<any> {
    return this.http.delete<any>(`${environment.urlbackend}${url}/${id}`, {headers: this.headers});
  }

  getVehicles() : Observable<any> {
    return this.http.get<any>(`${environment.urlbackend}vehicle`, {headers: this.headers});
  }

  getVehicleById(id: any) : Observable<any> {
    return this.http.get<any>(`${environment.urlbackend}vehicle/${id}`, {headers: this.headers});
  }

}
