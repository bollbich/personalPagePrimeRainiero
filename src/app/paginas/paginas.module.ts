import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ImageModule } from 'primeng/image';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    ContactComponent,
    MainComponent,
    ServiciosComponent
  ],
  exports:[
    ContactComponent,
    MainComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ImageModule
  ]
})
export class PaginasModule { }
