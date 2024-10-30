import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { CountriesComponent } from '../countries/countries.component';



@Component({
  selector: 'app-stay',
  standalone: true,
  imports: [ CommonModule, CountriesComponent, RouterOutlet, RouterModule ],
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent {

  showShortDuration: boolean = false;
  showLongDuration: boolean = false;
  selectedCountry: string = '';
  selectedVisaType: string = '';

  constructor(private router: Router) {}

  
  onCountrySelect(country: string) {
    this.selectedCountry = country;
  }

  onClickShortDuration() {
    this.showShortDuration = true;
    this.showLongDuration = false;
    this.selectedVisaType = 'short';
  }
  
  onClickLongDuration() {
    this.showShortDuration = false;
    this.showLongDuration = true;
    this.selectedVisaType = 'long';
  }

  volver() {
    this.showShortDuration = false;
    this.showLongDuration = false;
  }
   
  navigateToFaq(visaType: string): void {
    this.router.navigate(['/faqs', visaType, { country: this.selectedCountry }]);
  }
}





/**
 * 
 
import { Router } from "express";
import { getProducts, getProduct, deleteProduct, postProduct, updateProduct } from "../controllers/producto";

const router = Router ();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct )
router.post('/', postProduct )
router.put('/:id', updateProduct);


export default router;
 */