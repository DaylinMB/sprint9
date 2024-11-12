import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { HomeComponent } from './frontend/components/home/home.component';
import { HeroComponent } from "./frontend/components/hero/hero.component";
import { NavbarComponent } from "./frontend/components/navbar/navbar.component";
import { CountriesComponent } from "./frontend/components/countries/countries.component";
import { StayComponent } from "./frontend/components/stay/stay.component";
import { FaqComponent } from "./frontend/components/faq/faq.component";
import { LawyersComponent } from "./frontend/components/lawyers/lawyers.component";
import { PrincipalComponent } from "./frontend/components/principal/principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeroComponent, NavbarComponent, CountriesComponent, StayComponent, FaqComponent, LawyersComponent, PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sprint9';
}
