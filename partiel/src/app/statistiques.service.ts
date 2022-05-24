import { Injectable } from '@angular/core';
import { Statistique } from './models/Statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  stats: Statistique[] = [{ id: "12345", titre: "stat1", valeur: "10%" }, { id: "67891", titre: "stat2", valeur: "20%" }]

  constructor() {
    setTimeout(() => {
      this.stats.push({
        id: "162738",
        titre: "stat3",
        valeur: "30%"
      });
    }, 3000);
  }
}
