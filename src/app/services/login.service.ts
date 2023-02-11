import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from '../Model/Livreur.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL :string ="http://localhost:8081/api/livreur";
  loggedUser: string;
   helper=new JwtHelperService();

  constructor(private http:HttpClient,private router:Router) { }

  loginLivreur(l:Livreur){
    return this.http.post<any>(this.apiURL+"/login", l);
  }


  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }

  }
  userDetails(){

    let token:any=localStorage.getItem('myToken');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }


}
