import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponenteComponent } from './components/nav-bar-componente/nav-bar-componente.component';
import { FooterComponenteComponent } from './components/footer-componente/footer-componente.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { FormComponenteComponent } from './components/form-componente/form-componente.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { IdToStringPipe } from './pipes/id-to-string.pipe';
import { CardComponent } from './components/card/card.component';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponenteComponent,
    FooterComponenteComponent,
    HomePageComponent,
    RegisterPageComponent,
    FormComponenteComponent,
    ProfilePageComponent,
    BooksPageComponent,
    IdToStringPipe,
    CardComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
