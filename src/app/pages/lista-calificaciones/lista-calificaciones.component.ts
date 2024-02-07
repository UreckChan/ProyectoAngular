import { Component, OnInit } from '@angular/core';
import { Calificaciones } from '../../models/calificaciones';
import { MateriaService } from '../../services/materia.service';

@Component({
  selector: 'app-lista-calificaciones',
  templateUrl: './lista-calificaciones.component.html',
  styleUrl: './lista-calificaciones.component.css'
})
export class ListaCalificacionesComponent implements OnInit{

  calificaciones:Calificaciones[]=[];

  constructor(private materiaService:MateriaService){}

  ngOnInit(): void {
    this.calificaciones = this.materiaService.getCalificaciones();
  }

}
