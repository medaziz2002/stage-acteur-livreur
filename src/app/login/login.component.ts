import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Livreur } from '../Model/Livreur.model';
import { LoginService } from '../services/login.service';
import { NgToastService } from 'ng-angular-popup';

import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup;

  constructor(private router:Router,private fb:FormBuilder,private toast :NgToastService
    ,private loginService:LoginService)
  {

      let formControls = {
        email: new FormControl('',[
          Validators.required,
          Validators.email

        ]),
        mdp: new FormControl('',[
          Validators.required,

        ])
      }

      this.loginForm = this.fb.group(formControls)

  }


  ngOnInit(): void {
    let isLoggedIn = this.loginService.isLoggedIn();


    if (isLoggedIn) {




      this.router.navigate(['/ajout-contact']);
    }
  }
  get email() { return this.loginForm.get('email') }
  get mdp() { return this.loginForm.get('mdp') }

  login() {
    let data = this.loginForm.value;
    console.log(data);
    let liv = new Livreur(
     null, null, null,data.email,null,data.mdp);
    console.log(liv);
    if (

      data.email == 0 ||
      data.mdp == 0
    )
    {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {

      this.loginService.loginLivreur(liv).subscribe(
        res=>{
          console.log(res);
          let token = res.token;
          localStorage.setItem("myToken",token);
          const helper = new JwtHelperService ();

        const decodedToken = helper.decodeToken(token);
        
       
        console.log("lavvvvvv"+localStorage.setItem("idLivreur",decodedToken?.data?.id));
          this.router.navigate(['/ajout-contact']);
        },
        err=>{
          console.log(err);
          this.toast.error({
            detail: 'Error Message',
            summary: ' compte ne existe pas ',
          });

        }
      )

    }

    }
}
