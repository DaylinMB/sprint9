import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { StayComponent } from '../stay/stay.component';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, StayComponent, RouterModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
})
export class CountriesComponent {
  listCountries: Country[] = [];
  @Output() countrySelected = new EventEmitter<string>();

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

  onCountrySelect(country: string) {
    this.countrySelected.emit(country);
  }

  
}
