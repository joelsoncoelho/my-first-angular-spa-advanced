import { Injectable } from '@angular/core';
import { Animal, IAnimal } from '../components/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { AnimalMapperService } from './mappers/animal-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals';

  constructor(
    private httpClient: HttpClient,
    private readonly animalMapper: AnimalMapperService,
  ) { }

  remove(id: number){
    return this.httpClient.delete<Animal>(`$(this.apiUrl}/${id}`)

  }

  getAll():Observable<IAnimal[]>{
    return this.httpClient.get<Animal[]>(this.apiUrl)
      .pipe(
        // map((animal) => this.animalMapper.mapFrom(animal))
        map(this.animalMapper.mapFrom)
      )
  }
}
