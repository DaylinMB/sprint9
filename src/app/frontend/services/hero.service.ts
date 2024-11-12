import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  public steps: Hero[] = [
    {
        title: 'Bienvenidos a Migracheck',
        description: 'Toda la información sobre procesos migratorios en España, reunida en un solo lugar.',
        img: '/assets/imagen3.svg',
    },
    {
        title: 'Trámites Migratorios para Latinoamericanos',
        description: 'Guía completa para realizar los trámites migratorios desde Latinoamérica, con información específica según tu país.',
        img: '/assets/imagen7.svg',
    },
    {
        title: 'Estancia en España',
        description: 'Consulta los requisitos de visado, permisos de residencia y otros trámites para tu estancia en España.',
        img: '/assets/imagen9.svg',
    }
      
  ];

  constructor() { }

  getSteps(): Hero[] {
    return this.steps;
  }
}
