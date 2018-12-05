import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  consultaGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.consultaGroup = this.fb.group({
      'asunto' : new FormControl('', Validators.required),
      'mensaje' : new FormControl('', Validators.required),
    });
  }

  enviar() {
    if ( window.confirm('Esta seguro que desea enviar esta consulta?') ) {
      const datos = this.consultaGroup.value;
      this.consultaGroup.reset();
      console.log(datos);
      localStorage.setItem('datos', btoa(JSON.stringify(datos)));
    }
  }

}
