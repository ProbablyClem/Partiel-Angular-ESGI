import { sanitizeIdentifier } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/Statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor() { }
  @Input() stat?: Statistique
  @Output() deleteRequest = new EventEmitter<Statistique>();

  ngOnInit(): void {
  }

  delete() {
    this.deleteRequest.emit(this.stat)
  }
}
