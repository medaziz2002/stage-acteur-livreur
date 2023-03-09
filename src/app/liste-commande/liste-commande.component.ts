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
message="";
a:number=0;
b:number=0;
isLivreurIn:boolean;
  constructor(private router:Router,public commandeService:CommandeService)
   { }
   data = [{
    'name': 'Jolly',
    'address': 'Mars',
    'email': 'example@abc.com'
  }]
  data2:any;
  dataString = JSON.stringify(this.data);

  ngOnInit(): void {
this.commandeService.getAllMyListAllLivre()
setTimeout(()=>
{
  console.log('liste',this.commandeService.listALivrer)
},200
)
  }

 
  confirmerLiv(id:number)
  {
    console.log(id);
    this.a=id;
   
    
    this.commandeService.confirmFactureByIdFromApi(id).subscribe((data)=>{
      this.message='<div class="alert alert-success" role="alert">Commande Confirmé a la livraison</div>'
      this. dropMessage();
    },err=>{  
      this.message='<div class="alert alert-danger" role="alert">Confirmation de livraison ne pas effectuer</div>'
    this. dropMessage();
  })
  }
  dropMessage()
  {
    setTimeout(() => {
      this.message="";
      this.router.navigate(['/liste-commande'])
      
    }, 3000);
  }

 




}
