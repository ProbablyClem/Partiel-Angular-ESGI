import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatistiqueBack } from './models/apiTypes';
import { Statistique } from './models/Statistique';
import { webSocket } from 'rxjs/webSocket'
@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {
  URL_API: string = "https://stats.naminilamy.fr/"
  URL_WS: string = "wss://ac88n1oa17.execute-api.eu-west-3.amazonaws.com/dev"
  stats: Statistique[] = []

  constructor(private http: HttpClient) {
    this.getStats()
    this.connectToWs()
  }

  deleteItem(statistique: Statistique) {
    this.http.delete(this.URL_API + statistique.id).subscribe(res => {
      this.getStats()
    }, err => {
      console.log(err);
    });
  }

  getStats() {
    this.stats = []
    this.http.get(this.URL_API).subscribe(res => {
      for (let s of res as StatistiqueBack[]) {
        this.addElement(s)
      }
    }, err => {
      console.log(err);
    });
  }

  addStat(statistique: Statistique) {
    const found = this.stats.find(element => element.id == statistique.id); //On regarde si l'élément existe deja
    if (!found) { //Si il n'existe pas on le créer
      this.http.post(this.URL_API, { title: statistique.titre, value: statistique.valeur }).subscribe(res => {
        this.getStats()
      }, err => {
        console.log(err);
      });
    }
    else { //Sinon on l'update
      this.http.put(this.URL_API + statistique.id, { title: statistique.titre, value: statistique.valeur }).subscribe(res => {
        this.getStats()
      }, err => {
        console.log(err);
      });
    }
  }

  connectToWs() {
    webSocket(this.URL_WS).subscribe((msg: any) => {
      let stat: StatistiqueBack = msg.object
      if (msg.type == "DELETED_DATA") {
        this.getStats()
      } else {
        this.addElement(stat)
      }
    }, err => console.log(err), () => {
      console.log("Websocket disconnected, retry");
      this.connectToWs()
    })
  }

  private addElement(stat: StatistiqueBack) {
    const found = this.stats.find(element => element.id == stat.id);
    if (!found) {
      this.stats.push({ id: stat.id, titre: stat.title, valeur: stat.value });
    } else {
      found.titre = stat.title
      found.valeur = stat.value
    }
  }
}
