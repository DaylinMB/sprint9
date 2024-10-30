import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
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

  constructor(
    private faqService: FaqService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.faqService.getFaqs().subscribe({
      next: (data) => {
        this.faqs = data;
        this.filteredFaqs = data; // Inicializa `filteredFaqs` con todos los datos
      },
      error: (error) => {
        console.error("Error fetching FAQs:", error);
      }
    });
  }

  navigateToFaq(visaType: string) {
    this.router.navigate(['/faq'], { queryParams: { type: visaType } });
  }

  applyFilters(): void {
    this.filteredFaqs = this.faqs.filter(faq => {
      // Filtra por país y tipo de visa según la pregunta
      const matchesCountry = this.selectedCountry 
        ? faq.question.includes(this.selectedCountry)
        : true;

      const matchesVisaType = this.selectedVisaType 
        ? faq.question.toLowerCase().includes(this.selectedVisaType.toLowerCase())
        : true;

      return matchesCountry && matchesVisaType;
    });
  }

}
