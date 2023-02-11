import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  totalCommande:number=0;
  constructor(private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.commandeService.listeCommande().subscribe(data=>
      {
        this.totalCommande=data.length;
      }
    )
  }

}
