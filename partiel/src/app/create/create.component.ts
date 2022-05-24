import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Statistique } from '../models/Statistique';
import { StatistiquesService } from '../statistiques.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  id!: string
  titre!: string
  valeur!: string

  constructor(protected statistiqueService: StatistiquesService) {
  }

  ngOnInit(): void {
  }

  ajouterStat(form: NgForm) {
    this.statistiqueService.addStat({ id: this.id, titre: this.titre, valeur: this.valeur })
    form.reset()
  }
}
