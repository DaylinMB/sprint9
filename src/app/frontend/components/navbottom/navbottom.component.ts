import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbottom',
  standalone: true,
  imports: [],
  templateUrl: './navbottom.component.html',
  styleUrl: './navbottom.component.css'
})
export class NavbottomComponent {
  constructor(private router: Router) {}

  // Método para navegar a la página de abogados
  navigateToLawyers() {
    this.router.navigate(['/lawyer']);
  }

}
