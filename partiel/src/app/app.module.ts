import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { CreateComponent } from './create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StatistiquesService } from './statistiques.service';
@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    ListeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [StatistiquesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
