import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDetails:any;
  isLivreurIn:boolean;
  IsloggedIn:boolean;
  constructor(private router:Router,private loginService:LoginService,private Service:CommandeService) {
    this.userDetails = this.loginService.userDetails();
   }

  ngOnInit(): void {
    console.log("apres decode"+this.userDetails);
    this.isLivreurIn=this.Service.isLivreurInIn();
     this.IsloggedIn=this.Service.isLoggedIn();
  }


  logout()
  {
    console.log("logout");
    localStorage.clear();
    this.router.navigate(['']);
  }







}
