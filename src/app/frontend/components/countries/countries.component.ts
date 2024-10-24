import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { StayComponent } from '../stay/stay.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, StayComponent, RouterModule ],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
})
export class CountriesComponent {
  listCountries: Country[] = [];

  ngOnInit(): void {
    this.getCountriesData();
  }

  constructor(private _countryService: CountryService) {}

  populateDropdown(data: Country[]) {
    this.listCountries = data.sort((a, b) => a.name.localeCompare(b.name));
  }

  getCountriesData(): void {
    this._countryService.getCountries().subscribe((data: Country[]) => {
      this.populateDropdown(data);
    });
  }
}