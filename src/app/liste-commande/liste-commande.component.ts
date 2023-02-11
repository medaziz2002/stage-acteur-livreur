import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../Model/Commande.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {
p:number=0;
  commandes!:Commande[];
  constructor(private router:Router,private commandeService:CommandeService)
   { }

  ngOnInit(): void {
    this.chargerCommande();
  }

  chargerCommande()
  {
    this.commandeService.listeCommande().subscribe(commande=>
      {
        console.log(commande);
        this.commandes=commande;

      });
  }

  supprimerCommande(a:Commande)
  {
    let conf=confirm("Etes-vous sur ?");
    if(conf)
    {
      this.commandeService.supprimerCommande(a.id).subscribe(()=>
      {
        console.log("commande supprimer");
        this.chargerCommande();
        this.router.navigate(['liste-commande']);
      })
    }

  }




}
