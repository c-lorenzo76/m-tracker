import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {JournalEntryDTO} from "../../dtos/new-journal.dto";

@Injectable({
  providedIn: 'root'
})
export class JournalEntriesService {

  private apiUrl = "http://localhost:8080/journal";

  constructor(private http: HttpClient) { }

  createJournal(journalEntry : JournalEntryDTO) : Observable<HttpResponse<any>> {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.post<any>(`${this.apiUrl}/create`, journalEntry,{ headers, observe:'response' });
  }

  fetchUserJournals() : Observable<any> {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.get(`${this.apiUrl}/all`, { headers });
  }

  fetchNumJournals(): Observable<number> {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.get<number>(`${this.apiUrl}/count-journals`, { headers });

  }


}
