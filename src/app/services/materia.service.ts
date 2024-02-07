import { Injectable } from '@angular/core';
import { Calificaciones } from '../models/calificaciones';
import { Materia } from '../models/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private calificaciones: Calificaciones[]=[];
  private materias:Materia[]=[];

  constructor() {
    this.calificaciones=[];
    this.materias=[
      {
        id:0,
        nombre:'Español'
      },
      {
        id:1,
        nombre:'Matematicas'
      },
      {
        id:2,
        nombre:'Ingles'
      },
      {
        id:3,
        nombre:'Historia'
      },
      {
        id:4,
        nombre:'Quimica'
      },
      {
        id:5,
        nombre:'Geografia'
      }
    ];
   }

   getCalificaciones(){
    return this.calificaciones;
   }

   getMaterias(){
    return this.materias;
   }

   agregarCalificacion(calificaciones:Calificaciones){
    this.calificaciones.push(calificaciones);
   }

   nuevaCalificacion():Calificaciones{
    return{
      id: this.calificaciones.length + 1,
      alumno: ' ',
      calificacion: 0,
      materia: ' ',
    };
   }

}
