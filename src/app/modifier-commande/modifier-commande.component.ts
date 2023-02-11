import { CommandeService } from './../services/commande.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Commande } from '../Model/Commande.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modifier-commande',
  templateUrl: './modifier-commande.component.html',
  styleUrls: ['./modifier-commande.component.css']
})
export class ModifierCommandeComponent implements OnInit {

  currentCommande=new Commande();
  userFile: any;
  public imagePath: any;
  imgURL: any
  addCommandeForm:FormGroup;
  public message!: string;


  constructor(private router:Router , private commandeService :CommandeService,private activatedRouter:ActivatedRoute){ }

  ngOnInit(): void {
    this.commandeService.consulterCommande(this.activatedRouter.snapshot.params['id']).
    subscribe(cmd=>
      {this.currentCommande=cmd;
    console.log(cmd);
  }
  );
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;


      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }

  modifierCommande()
  {
    this.commandeService.modifierCommande(this.currentCommande).subscribe(cmd=>{
      console.log(cmd);
      this.router.navigate(['liste-commande']);
    });


  }

}
