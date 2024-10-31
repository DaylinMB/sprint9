import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { FaqComponent } from '../faq/faq.component';
import { Process } from '../../interfaces/process';
import { ProcessService } from '../../services/process.service';

@Component({
  selector: 'app-stay',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterModule, FaqComponent  ],
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent {
  listProcess: Process[] = [];
  @Output() processSelected = new EventEmitter<string>();

  constructor(
    private _processService: ProcessService,
  ) {}

  ngOnInit() {
    this._processService.getProcess().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data); // Añade esta línea
        this.listProcess = data;
      },
      error: (err) => {
        console.error('Error al cargar procesos:', err);
      }
    });
  }
  
  

  onProcessSelected(process: string) {
    console.log('Proceso seleccionado:', process);
    this.processSelected.emit(process);
  }
}