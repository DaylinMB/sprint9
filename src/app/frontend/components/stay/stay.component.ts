import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

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
  showDuration: boolean = false;
  selectedDuration: string = '';
  selectedCountry: string = '';
  selectedVisaType: string = '';
  listProcesses: Process[] = [];

  constructor(private router: Router, private _processService: ProcessService) { }


  onCountrySelect(country: string) {
    this.selectedCountry = country;
  }

  
  onClickDuration(duration: string) {
    this.selectedDuration = duration === 'short' ? 'corta' : 'larga';
    this._processService.getProcessesByDuration(duration).subscribe((data: Process[]) => {
      this.listProcesses = data;
      this.showDuration = true;
    });
  }

  volver() {
    this.router.navigate(['/stay']);
    this.showDuration = false;
  }

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedIdProcess = target.value;
  
    if (selectedIdProcess) {
      this.navigateToFaq(selectedIdProcess);
    }
  }
  
  navigateToFaq(selectedIdProcess: string) {
    if (selectedIdProcess) {
      this.router.navigate(['/faq'], { queryParams: { selectedIdProcess } });
    }
  }
}