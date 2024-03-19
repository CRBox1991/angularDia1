import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponenteComponent } from './components/nav-bar-componente/nav-bar-componente.component';
import { FooterComponenteComponent } from './components/footer-componente/footer-componente.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponenteComponent,
    FooterComponenteComponent,
    HomePageComponent,
    RegisterPageComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
