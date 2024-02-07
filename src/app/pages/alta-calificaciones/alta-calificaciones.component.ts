import { Component, OnInit } from '@angular/core';
import { Calificaciones } from '../../models/calificaciones';
import { Materia } from '../../models/materia';
import { MateriaService } from '../../services/materia.service';

@Component({
  selector: 'app-alta-calificaciones',
  templateUrl: './alta-calificaciones.component.html',
  styleUrl: './alta-calificaciones.component.css'
})
export class AltaCalificacionesComponent implements OnInit {

  calificaciones!:Calificaciones;
  materias: Materia[]= [] ;

  constructor(private materiaService:MateriaService){}

  ngOnInit(): void {
    this.calificaciones = this.materiaService.nuevaCalificacion();
    this.materias = this.materiaService.getMaterias();
  }

  insertarCalificacion(){
    this.materiaService.agregarCalificacion(this.calificaciones);
    this.calificaciones = this.materiaService.nuevaCalificacion();
  }

}
