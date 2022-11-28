import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getBrands() : Observable<any> {
    return this.http.get<any>(`${environment.urlbackend}brand`, {headers: this.headers});
  }

  getVehicles(data: any) : Observable<any> {

    let queryparams = "";

    if (data.status) {
      queryparams += `status=${data.status == "1"}&`;
    }

    if (data.brandId) {
      queryparams += `brandId=${data.brandId}&`;
    }

    if (data.line) {
      queryparams += `line=${data.line}&`;
    }

    if (data.model) {
      queryparams += `model=${data.model}`;
    }
    
    return this.http.get<any>(`${environment.urlbackend}vehicle?${queryparams}`, {headers: this.headers});
  }
}
