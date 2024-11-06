import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from './claim';



@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  private baseURL = "http://localhost:8080/api/v1/claims";

  constructor(private httpClient: HttpClient) { }

  getAllclaims(): Observable<Claim[]>{
    return this.httpClient.get<Claim[]>(`${this.baseURL}`);
  }

  createClaim(claim: Claim): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, claim);
  }

  getClaimById(id: number): Observable<Claim>{
    return this.httpClient.get<Claim>(`${this.baseURL}/${id}`);
  }

  updateClaim(id: number, claim: Claim): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, claim);
  }

  deleteClaim(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
