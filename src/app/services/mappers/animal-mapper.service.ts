import { Injectable } from '@angular/core';
import { Animal, IAnimal } from 'src/app/components/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalMapperService {

  constructor() { }

  public mapFrom(animal: Array<Animal>): Array<IAnimal> {
    const animais = animal?.map((animal) => {
      return {
        cod: animal?.id ?? '',
        nome: animal?.name ?? '',
        tipo: animal?.type ?? '',
        idade: animal?.age ?? '',
        createdAt: animal ? String(new Date()) : ''
      }
    }) ?? [];

    // const pagination = {
    //   page: animal?.pagination?.page,
    //   size: animal?.pagination?.itemsPerPage,
    //   total: animal?.pagination?.total,
    //   totalElements: animal?.pagination?.totalItems,
    // }

    // return {
    //   data: animais,
    //   pagination,
    // }

    return animais;
  }

  public mapTo(animal: IAnimal): Animal {

    const payload = {
      id: animal?.cod,
      name: animal?.nome,
      type: animal?.tipo,
      age: animal?.idade,
    };

    return payload;
  }
}
