import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolvesService {

  constructor() { }

  filterByString(searchString: string, data: any[]) {
    if (searchString === '') {
      // se a string de busca estiver vazia, retornamos todos os dados
      return data;
    } else {
      // caso contrário, filtramos os dados pela string de busca
      return data.filter((item) => item.name.includes(searchString));
    }
  }
  
}
