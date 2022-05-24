import { Component } from '@angular/core';
import { Statistique } from './models/Statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partiel';

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
