import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' }, // Ruta por defecto que redirige a la página de inicio
  { path: "home", component:HomePageComponent},
  { path: "register", component: RegisterPageComponent},
  { path: "profile", component: ProfilePageComponent},
  { path: "books", component: BooksPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
