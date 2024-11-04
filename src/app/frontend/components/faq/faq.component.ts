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
    // Read query params
    this.route.queryParamMap.subscribe(params => {
      const selectedIdProcess = params.get('selectedIdProcess');
      this.populateFaqsByProcessId(Number(selectedIdProcess));
    });

  }

  populateFaqsByProcessId(processId: number): void {
    this.faqService.getFaqsByProcessId(processId).subscribe({
      next: (data) => {
        this.filteredFaqs = data;
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

  volver(): void {
    this.router.navigate(['/stay']);
  }
}