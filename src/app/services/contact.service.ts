import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../Model/Commande.model';
import { Contact } from '../Model/Contact.model';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiURL: string = 'http://localhost:8081/api/contact';
  constructor(private http:HttpClient) { }



  ajouterContact(contact:Contact):Observable<Contact>{
    return this.http.post<Contact>(this.apiURL, contact,httpOptions);
  }




}
