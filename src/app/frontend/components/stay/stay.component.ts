import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountriesComponent } from '../countries/countries.component';


@Component({
  selector: 'app-stay',
  standalone: true,
  imports: [ CommonModule, CountriesComponent ],
  templateUrl: './stay.component.html',
  styleUrl: './stay.component.css'
})
export class StayComponent {

  showShortDuration: boolean = false;
  showLongDuration: boolean = false;


  onClickShortDuration() {
    this.showShortDuration = true;
    this.showLongDuration = false;
  }
  
  onClickLongDuration() {
    this.showShortDuration = false;
    this.showLongDuration = true;
  }

  volver() {
    this.showShortDuration = false;
    this.showLongDuration = false;
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