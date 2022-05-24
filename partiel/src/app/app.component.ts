import { Component } from '@angular/core';
import { Statistique } from './models/Statistique';
import { StatistiquesService } from './statistiques.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partiel';

  constructor(public statitisquesService: StatistiquesService) {

  }
}
