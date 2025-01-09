import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JournalEntriesService {

  private apiUrl = "http://localhost:8080/journal";

  constructor(private http: HttpClient) { }

  fetchUserJournals() : Observable<any> {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.get(`${this.apiUrl}/all`, { headers });
  }
}
