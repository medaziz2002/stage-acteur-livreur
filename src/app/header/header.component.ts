import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDetails:any;
  constructor(private router:Router,private loginService:LoginService) {
    this.userDetails = this.loginService.userDetails();
   }

  ngOnInit(): void {
    console.log("apres decode"+this.userDetails);
  }


  logout()
  {
    console.log("logout");
    localStorage.clear();
    this.router.navigate(['']);
  }







}
