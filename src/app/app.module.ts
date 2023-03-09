import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgToastModule} from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
   
    ListeCommandeComponent,
    
    AjoutContactComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    IndexComponent,
    ProfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
