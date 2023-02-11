import { NgToastService } from 'ng-angular-popup';
import { CommandeService } from './../services/commande.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Commande } from '../Model/Commande.model';

@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.css']
})
export class AjoutCommandeComponent implements OnInit {

  userFile: any;
  public imagePath: any;
  imgURL: any
  newProduit=new Commande()
  addCommandeForm:FormGroup;
  public message!: string;


  constructor(private commandeService:CommandeService,private router:Router,private fb:FormBuilder,private toast:NgToastService)
   {
    let formControls = {
      categorie: new FormControl('',[
        Validators.required,

      ]),
      libelle: new FormControl('',[
        Validators.required,

      ]),
      qte: new FormControl('',[
        Validators.required,

      ]),
      prix: new FormControl('',[
        Validators.required,

      ]),
      date: new FormControl('',[
        Validators.required,

      ]),
      gouvernorat: new FormControl('',[
        Validators.required,

      ]),
      teleclient: new FormControl('',[
        Validators.required,

      ]),
      adresseclient: new FormControl('',[
        Validators.required,

      ]),

      photo: new FormControl('',[
        Validators.required,

      ])
    }

    this.addCommandeForm = this.fb.group(formControls)

    }

    get libelle() {
      return this.addCommandeForm.get('libelle');
    }

    get prix() {
      return this.addCommandeForm.get('prix');
    }

    get date() {
      return this.addCommandeForm.get('date');
    }

    get qte() {
      return this.addCommandeForm.get('qte');
    }

    get gouvernorat() {
      return this.addCommandeForm.get('gouvernorat');
    }

    get adresseclient() {
      return this.addCommandeForm.get('adresseclient');
    }

    get photo() {
      return this.addCommandeForm.get('photo');
    }

    get teleclient() {
      return this.addCommandeForm.get('teleclient');
    }

    addCommande() {
      let data = this.addCommandeForm.value;
      console.log(data);
      let cmd = new Commande(
        undefined,data.libelle,data.qte,data.prix,data.date,data.gouvernorat,data.teleclient,data.adresseclient,this.imgURL);
      console.log(cmd);

      if (
        data.libelle == 0 ||
        data.qte == 0 ||
        data.prix == 0 ||
        data.date ==0 ||
        data.gouvernorat == 0 ||
        data.teleclient == 0 ||
        data.adresseclient ==0

      ) {
        this.toast.info({
          detail: 'Error Message',
          summary: 'Remplir votre champs',
        });
      } else {
      this.commandeService.ajouterCommande(cmd).subscribe(
        res=>{
          console.log(res);
          this.toast.success({
            detail: 'Succes Message',
            summary: 'Message est Envoyée',
          });

          this.router.navigate(['/liste-commande']);
        },
        err=>{
          console.log(err);
          this.toast.error({
            detail: 'Error Message',
            summary: 'Probléme de Serveur',
          }); }
      )

      }
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
  ngOnInit(): void {
  }



}
