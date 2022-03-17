import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './paginas/contact/contact.component';
import { MainComponent } from './paginas/main/main.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';

const routes: Routes = [
  {
    path: '',
    component:MainComponent,
    pathMatch:'full'
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'servicios',
    component: ServiciosComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
