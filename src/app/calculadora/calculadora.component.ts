import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  propina: number;
  cuenta: number;
  valido: boolean;
  porcentaje = 10;

  constructor() {
  }

  ngOnInit() {
  }

  calcular() {
    this.propina = (this.cuenta * this.porcentaje / 100);
  }

  validar() {
    this.valido = true;
  }

  invalidar() {
    this.valido = false;
    this.porcentaje = 10;
  }
}
