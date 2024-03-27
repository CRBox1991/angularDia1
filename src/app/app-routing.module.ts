import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' }, // Ruta por defecto que redirige a la página de inicio
  { path: "home", component:HomePageComponent},
  { path: "register", component: RegisterPageComponent},
  { path: "profile", component: ProfilePageComponent},
  { path: "books", component: BooksPageComponent},
  { path: "AddBooks", component: AddBookComponent},
  { path: "ModifyBook", component:UpdateBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
