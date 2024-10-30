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
  lastRoute: string = ''; 

  constructor(
    private faqService: FaqService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.faqService.getFaqs().subscribe({
      next: (data) => {
        this.faqs = data;
        this.filteredFaqs = data; // Inicializa `filteredFaqs` con todos los datos
  
        // Leer los parámetros de consulta y filtrar FAQs
        this.route.queryParams.subscribe(params => {
          if (params['type']) {
            this.selectedVisaType = params['type'];
            this.applyFilters(); // Aplicar filtros con el tipo de visa seleccionado
          }
        });
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
    console.log('Tipo de visa seleccionado:', this.selectedVisaType);
    this.filteredFaqs = this.faqs.filter(faq => {
      const matchesVisaType = this.selectedVisaType
        ? faq.question.toLowerCase().includes(this.selectedVisaType.toLowerCase())
        : true;
  
      console.log(`Pregunta: "${faq.question}", Coincide: ${matchesVisaType}`);
      return matchesVisaType; 
    });
  
    // Para depurar el resultado
    console.log('Preguntas filtradas:', this.filteredFaqs);
  }
  
  
  volver(): void {
    this.router.navigate(['/stay']); 
  }
}