import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
               label: 'Ir',
               icon: 'pi pi-prime',
               items:[
                 {
                   label:'Inicio',
                   icon:'pi pi-align-left',
                   routerLink:'/'
                 },
                 {
                  label:'Servicios',
                  icon:'pi pi-briefcase',
                  routerLink:'servicios'
                },
                 {
                  label:'Contacto',
                  icon:'pi pi-briefcase',
                  routerLink:'contact'
                }
               ]
            }
        ];
    }

  }
