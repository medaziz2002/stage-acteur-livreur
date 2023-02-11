import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { NgToastService } from 'ng-angular-popup';
import { Contact } from '../Model/Contact.model';

@Component({
  selector: 'app-ajout-contact',
  templateUrl: './ajout-contact.component.html',
  styleUrls: ['./ajout-contact.component.css']
})
export class AjoutContactComponent implements OnInit {
  newConatct = new Contact();
  addContactForm:FormGroup;
  constructor(private router:Router,private contactService:ContactService,private fb:FormBuilder,private toast :NgToastService )
  {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,

      ]),
      prenom: new FormControl('',[
        Validators.required,

      ]),
      tel: new FormControl('',[
        Validators.required,
        Validators.email,

      ]),


      sujet: new FormControl('',[
        Validators.required,

      ]),
      msg: new FormControl('',[
        Validators.required,
        Validators.email,

      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,

      ]),
    }
      this.addContactForm = this.fb.group(formControls);
   }

  ngOnInit(): void {
  }

  get nom() {
    return this.addContactForm.get('nom');
  }
  get prenom() {
    return this.addContactForm.get('prenom');
  }
  get tel() {
    return this.addContactForm.get('tel');
  }

  get sujet() {
    return this.addContactForm.get('sujet');
  }

  get msg() {
    return this.addContactForm.get('msg');
  }

  get email() {
    return this.addContactForm.get('email');
  }

  addNewContact() {
    let data = this.addContactForm.value;
    console.log(data);
    let contact = new Contact(
     undefined, data.nom,data.prenom,data.tel,data.sujet,data.msg,data.email);
    console.log(contact);

    if (
      data.nom == 0 ||
      data.prenom == 0 ||
      data.tel == 0 ||
      data.sujet == 0 ||
      data.msg == 0 ||
      data.email ==0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.contactService.ajouterContact(contact).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Message est Envoyée',
        });

        this.router.navigate(['/ajout-conatact']);
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




}
