import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatistiqueBack } from './models/apiTypes';
import { Statistique } from './models/Statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  stats: Statistique[] = []

  constructor(private http: HttpClient) {
    http.get("https://stats.naminilamy.fr/").subscribe(res => {
      for (let s of res as StatistiqueBack[]) {
        this.stats.push({ id: s.id, titre: s.title, valeur: s.value });
      }
    }, err => {
      console.log(err);
    });
  }

  deleteItem(statistique: Statistique) {
    const index = this.stats.indexOf(statistique);
    if (index > -1) {
      this.stats.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

  addStat(statistique: Statistique) {
    this.stats.push(statistique)
    console.log(this.stats)
  }
}
