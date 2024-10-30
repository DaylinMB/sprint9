import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeroComponent } from "./frontend/components/hero/hero.component";
import { NavbarComponent } from "./frontend/components/navbar/navbar.component";
import { CountriesComponent } from "./frontend/components/countries/countries.component";
import { StayComponent } from "./frontend/components/stay/stay.component";
import { FaqComponent } from "./frontend/components/faq/faq.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, NavbarComponent, CountriesComponent, StayComponent, FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sprint9';
}
