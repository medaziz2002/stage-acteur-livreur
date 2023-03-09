
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Commande } from '../Model/Commande.model';



const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  apiUrl: string = 'http://localhost:8081/api';

  listALivrer:any=[]
  constructor(private http:HttpClient) {}

  getAllMyListAllLivre()
{
    this.getAllMyListALivrerFromApi().subscribe((data)=>{
       
      this.listALivrer=data
    })
  }
  getAllMyListALivrerFromApi()
  {
    return this.http.get<any>(this.apiUrl+"/livreur/mon-list-a-livrer/"+localStorage.getItem("idLivreur"));
  }

  isLivreurInIn(){

    let token = localStorage.getItem("myToken");
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token);
     
    
    
    if (decodedToken?.data?.livreur && decodedToken?.data?.livreur!=undefined) {
      console.log("is true")
      return true ;
    } else {
      console.log("is false")
      return false;
    }
  }




  isLoggedIn(){

    let token = localStorage.getItem("myToken");
    
    if (token) {
      return true ;
    } else {
      return false;
    }
  }


  confirmFactureByIdFromApi(id:number)
  { 
   
    return this.http.patch<any>(this.apiUrl+"/livraison/confirme/"+id,id);
  }








}

