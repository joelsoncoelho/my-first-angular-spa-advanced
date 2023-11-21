import { Component, OnInit } from '@angular/core';
import { Animal, IAnimal } from '../Animal';
import { ListService } from 'src/app/services/list.service';
import { AnimalMapperService } from 'src/app/services/mappers/animal-mapper.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animalDetails: string = "";

  animals: IAnimal[] = [];

  constructor(
    private listService: ListService,
    private readonly animalMapper: AnimalMapperService,
  ) {
    this.getAnimals();
   }

  ngOnInit(): void {
  }

  showAge(animal: IAnimal): void {
    this.animalDetails = `O pet ${animal.nome} tem ${animal.idade} anos!`;
  }

  removeAnimal(animal: IAnimal){
    console.log('Removendo animal');
    this.animals = this.animals.filter((a)=> animal.nome !== a.nome);
    this.listService.remove(animal.cod).subscribe();

  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals))
  }

  // addAnimal(animal: IAnimal): void {
  //   const payload = this.animalMapper.mapTo(animal);
  //   this.listService.add(payload)
  // }

}
