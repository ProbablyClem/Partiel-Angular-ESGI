import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path: "liste", component: ListeComponent },
  { path: "create", component: CreateComponent },
  { path: "", component: ListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
