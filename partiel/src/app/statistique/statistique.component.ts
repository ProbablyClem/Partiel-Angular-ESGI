import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/Statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor() { }
  @Input() stat?: Statistique

  ngOnInit(): void {
  }

}
