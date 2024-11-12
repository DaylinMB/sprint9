import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':decrement', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
  
export class HeroComponent {
  @Input() steps: Hero[] = [];
  currentStep: number = 0;
  // constructor(private router: Router) {}

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.steps = this.heroService.getSteps();
  }

  track(index: number, step: any): number {
    return step.id; 
  }

  goToStep(index: number) {
    this.currentStep = index;
  }
  
  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  goCountry() {
    this.router.navigate(['/country']);
  }
}

