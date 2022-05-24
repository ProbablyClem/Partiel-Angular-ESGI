import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatistiqueBack } from './models/apiTypes';
import { Statistique } from './models/Statistique';
import { webSocket } from 'rxjs/webSocket'
@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  stats: Statistique[] = []

  constructor(private http: HttpClient) {
    this.getStats()
    this.connectToWs()
  }

  deleteItem(statistique: Statistique) {
    this.http.delete("https://stats.naminilamy.fr/" + statistique.id).subscribe(res => {
      this.getStats()
    }, err => {
      console.log(err);
    });
  }

  getStats() {
    this.stats = []
    this.http.get("https://stats.naminilamy.fr/").subscribe(res => {
      for (let s of res as StatistiqueBack[]) {
        this.stats.push({ id: s.id, titre: s.title, valeur: s.value });
      }
    }, err => {
      console.log(err);
    });
  }

  addStat(statistique: Statistique) {
    this.http.post("https://stats.naminilamy.fr/", { title: statistique.titre, value: statistique.valeur }).subscribe(res => {
      this.getStats()
    }, err => {
      console.log(err);
    });
  }

  connectToWs() {
    webSocket("wss://ac88n1oa17.execute-api.eu-west-3.amazonaws.com/dev").subscribe((msg: any) => {
      let stat: StatistiqueBack = msg.object
      const found = this.stats.find(element => element.id == stat.id);
      if (!found) {
        this.stats.push({ id: stat.id, titre: stat.title, valeur: stat.value });
      }
    }, err => console.log(err), () => {
      console.log("Websocket disconnected, retry");
      this.connectToWs()
    })
  }
}
