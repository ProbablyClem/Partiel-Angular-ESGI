import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(protected statistiqueService: StatistiquesService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.id = params["id"];
        this.titre = params["titre"]
        this.valeur = params["valeur"]
      }
      );
  }

  ajouterStat(form: NgForm) {
    this.statistiqueService.addStat({ id: this.id, titre: this.titre, valeur: this.valeur })
    form.reset()
  }
}
