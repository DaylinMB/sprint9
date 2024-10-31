import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqService } from '../../services/faq.service';
import { Faq } from '../../interfaces/faq';

import { ActivatedRoute, Router } from '@angular/router';
import { GentiliciosService } from '../../services/gentilicios.service';
import { HeadfaqComponent } from "../headfaq/headfaq.component";


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
          console.log("PARAMS: ", params)
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