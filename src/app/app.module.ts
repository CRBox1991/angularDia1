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
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/Http';






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
    AddBookComponent,
    UpdateBookComponent,
    LoginPageComponent,
    LoginComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
