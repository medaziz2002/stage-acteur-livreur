import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userDetails:any;
  constructor(private loginService:LoginService) {
    this.userDetails = this.loginService.userDetails();
  }

  ngOnInit(): void {
  }

}
