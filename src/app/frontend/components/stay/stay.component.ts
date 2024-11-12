import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProcessService } from '../../services/process.service';
import { Process } from '../../interfaces/process';

import { CommonModule } from '@angular/common';

import { Location } from '@angular/common';


@Component({
  selector: 'app-stay',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit{
  showDuration: boolean = false;
  selectedDuration: string = '';
  selectedCountryId: number = 1;
  selectedVisaType: string = '';
  listProcesses: Process[] = [];
  faqs: any[] = [];


  constructor(
    private router: Router, 
    private _processService: ProcessService, 
    private route: ActivatedRoute,
    private location: Location

  ) { }

  ngOnInit(): void {
    // Read query params
    this.route.queryParamMap.subscribe(params => {
      this.selectedCountryId = Number(params.get('selectedCountryId'));
    });

  }
  
  onClickDuration(duration: string) {
    this.selectedDuration = duration === 'short' ? 'corta' : 'larga';
    this._processService.getProcessesByDuration(duration).subscribe((data: Process[]) => {
      this.listProcesses = data;
      this.showDuration = true;
    });
  }

  volver() {
    this.location.back(); 
    this.showDuration = false;
  }
 

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedIdProcess = target.value || ''; 
  
    if (selectedIdProcess) {
      this.navigateToFaq(selectedIdProcess);
    }
  }

  navigateToFaq(selectedIdProcess: string) {
    if (selectedIdProcess) {
      this.router.navigate(['/principal'], {
        queryParams: {
          selectedIdProcess,
          selectedCountryId: this.selectedCountryId,
          selectedTab: 'faqs'
        }
      });
    }
  }
  
  
}