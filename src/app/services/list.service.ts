import { Injectable } from '@angular/core';
import { Animal } from '../components/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals';

  constructor(private httpClient: HttpClient) { }

  remove(id: number){
    return this.httpClient.delete<Animal>(`$(this.apiUrl}/${id}`)
    
  }

  getAll():Observable<Animal[]>{
    return this.httpClient.get<Animal[]>(this.apiUrl)

  }
}
