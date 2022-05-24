import { Component, OnInit } from '@angular/core';
import { StatistiquesService } from '../statistiques.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor(public statitisquesService: StatistiquesService) {

  }

  ngOnInit(): void {
  }

}
