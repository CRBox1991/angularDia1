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
import { ProfileBoxComponent } from './components/profile-box/profile-box.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponenteComponent,
    FooterComponenteComponent,
    HomePageComponent,
    RegisterPageComponent,
    FormComponenteComponent,
    ProfilePageComponent,
    ProfileBoxComponent,
    ProfileFormComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
