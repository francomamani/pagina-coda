import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  datos: any = null;
  constructor() { }

  ngOnInit() {
  }

  recuperar() {
    if (localStorage.length > 0) {
      this.datos = JSON.parse(atob(localStorage.getItem('datos')));
    }
  }

}
