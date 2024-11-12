import { Component, inject, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeroComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  steps: Hero[] = [];
  
  public stepsService = inject(HeroService)


  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }
}
