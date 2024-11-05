import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqService } from '../../services/faq.service';
import { Faq } from '../../interfaces/faq';
import { ActivatedRoute, Router } from '@angular/router';
import { HeadfaqComponent } from "../headfaq/headfaq.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, HeadfaqComponent],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: Faq[] = [];
  filteredFaqs: Faq[] = [];
  selectedCountry: string = '';
  selectedVisaType: string = '';
  openIndex: number | null = null; 
  showHeadfaq: boolean = true;


  constructor(
    private faqService: FaqService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Read query params
    this.route.queryParamMap.subscribe(params => {
      const selectedIdProcess = params.get('selectedIdProcess');
      const selectedCountryId = Number(params.get('selectedCountryId'));

      if (selectedIdProcess && selectedCountryId) {
        this.populateFaqsByProcessAndCountry(Number(selectedIdProcess), selectedCountryId);
      }
    });

  }

  populateFaqsByProcessAndCountry(processId: number, countryId: number): void {
    this.faqService.getFaqsByProcessAndCountry(processId, countryId).subscribe({
      next: (data) => {
        this.filteredFaqs = data;
      },
      error: (error) => {
        console.error("Error fetching FAQs:", error);
      }
    });
  }

  populateFaqsByProcessId(processId: number): void {
    this.faqService.getFaqsbyProcessId(processId).subscribe({
      next: (data) => {
        this.filteredFaqs = data;
      },
      error: (error) => {
        console.error("Error fetching FAQs:", error);
      }
    });
  }

  toggleAccordion(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  volver(): void {
    this.location.back(); 
  }

}