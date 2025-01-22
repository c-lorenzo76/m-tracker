import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoodHistoryService {

  private apiUrl = "http://localhost:8080/mood";

  constructor(private http :HttpClient) { }

  fetchMoodHistory (): Observable<any> {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.get(`${this.apiUrl}/all`, { headers });
  }

}
