import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Party } from './party.model';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private apiUrl = 'https://ap.greatfuturetechno.com/media/Party_Management_ASSIGNMENT.postman_collection.json';

  constructor(private http: HttpClient) { }

  getParties(): Observable<Party[]> {
    return this.http.get<Party[]>(this.apiUrl);
  }

  getPartyById(id: number): Observable<Party> {
    return this.http.get<Party>(`${this.apiUrl}/${id}`);
  }

  addParty(party: Party): Observable<Party> {
    return this.http.post<Party>(this.apiUrl, party);
  }

  updateParty(party: Party): Observable<Party> {
    return this.http.put<Party>(`${this.apiUrl}/${party.id}`, party);
  }

  deleteParty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
