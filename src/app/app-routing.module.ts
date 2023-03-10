import { ProfilComponent } from './profil/profil.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';
import { IndexComponent } from './index/index.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [

  {path:"liste-commande" ,component:ListeCommandeComponent},
  {path:"ajout-contact" ,component:AjoutContactComponent},
  {path:"",component:LoginComponent},
  {path:"index",component:IndexComponent},
  {path:"profil",component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
