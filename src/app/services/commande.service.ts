
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../Model/Commande.model';



const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  apiURL: string = 'http://localhost:8081/api/commande';

  constructor(private http:HttpClient) {}



  ajouterCommande(commande:Commande):Observable<Commande>{
    return this.http.post<Commande>(this.apiURL, commande,httpOptions);
  }

  listeCommande():Observable<Commande[]>
{
  return this.http.get<Commande[]>(this.apiURL);
}

supprimerCommande(id:number)
{
const url=`${this.apiURL}/${id}`;
return this.http.delete(url,httpOptions);
}

consulterCommande(id :number):Observable<Commande>
{
const url=`${this.apiURL+"/cmd"}/${id}`;
return this.http.get<Commande>(url);
}


modifierCommande(a:Commande):Observable<Commande>
{
  const url=`${this.apiURL}/${a.id}`;
  return this.http.put<Commande>(url, a,httpOptions);
}






}

