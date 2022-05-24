import { Component } from '@angular/core';
import { Statistique } from './models/Statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partiel';

  stat1: Statistique = { id: "12345", titre: "stat1", valeur: "10%" }
  stat2: Statistique = { id: "67891", titre: "stat2", valeur: "20%" }
}
