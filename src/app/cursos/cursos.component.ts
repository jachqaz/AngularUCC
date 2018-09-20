import { Component, OnInit } from '@angular/core';
import {Curso} from '../Entidades/Curso';
import {CURSOS} from '../Listas/lista-cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
// curso: Curso = {
//   idCurso: 1,
//   nombreCurso: 'Programacion Web 1'
// };
  cursos = CURSOS;
  selectedCurso: Curso;
  constructor() { }

  ngOnInit() {
  }
onSelect(curso: Curso): void {
    this.selectedCurso = curso;
}
}
