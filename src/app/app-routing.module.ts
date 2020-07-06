import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesSearchComponent } from "./components/places-search/places-search.component";


const routes: Routes = [
  { path: 'home', component: PlacesSearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
