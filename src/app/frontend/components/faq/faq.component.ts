import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FaqService } from '../../services/faq.service';
import { Faq } from '../../interfaces/faq';
import { StayComponent } from '../stay/stay.component';
import { GentiliciosService } from '../../services/gentilicios.service';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ CommonModule, StayComponent ],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: Faq[] = [];
  filteredFaqs: Faq[] = [];
  selectedCountry: string = '';
  selectedVisaType: string = '';
  openIndex: number | null = null; 

  constructor(
    private faqService: FaqService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.faqService.getFaqs().subscribe({
      next: (data) => {
        this.faqs = data;
        this.filteredFaqs = data;
        this.route.queryParams.subscribe(params => {
          this.selectedVisaType = params['type'] || '';
          this.selectedCountry = params['country'] || '';
          this.applyFilters();
        });
      },
      error: (error) => {
        console.error("Error fetching FAQs:", error);
      }
    });
  }

  toggleAccordion(index: number): void {
    // Alternar el índice abierto o cerrarlo si ya estaba abierto
    this.openIndex = this.openIndex === index ? null : index;
  }


 
  
  applyFilters(): void {
    this.filteredFaqs = this.faqs.filter(faq => {
      const matchesVisaType = this.selectedVisaType
        ? faq.question.toLowerCase().includes(this.selectedVisaType.toLowerCase())
        : true;
      const matchesCountry = this.selectedCountry
        ? faq.question.toLowerCase().includes(this.selectedCountry.toLowerCase()) || faq.answer.toLowerCase().includes(this.selectedCountry.toLowerCase())
        : true;
      return matchesVisaType && matchesCountry;
    });
  }
  
  navigateToFaq() {
    this.router.navigate(['/faq'], { queryParams: { type: this.selectedVisaType, country: this.selectedCountry } });
  }

  volver(): void {
    this.router.navigate(['/stay']); 
  }
}