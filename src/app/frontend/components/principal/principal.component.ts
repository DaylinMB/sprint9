import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FaqComponent } from "../faq/faq.component";
import { NavbottomComponent } from "../navbottom/navbottom.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NavbarComponent, FaqComponent, NavbottomComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {


}
