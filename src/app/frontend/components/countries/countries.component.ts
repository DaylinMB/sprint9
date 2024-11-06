import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
})
export class CountriesComponent {
  listCountries: Country[] = [];
  countryIdSelected: number = 0;

  ngOnInit(): void {
    this.getCountriesData();
  }

  constructor(private router: Router, private _countryService: CountryService) {}

  populateDropdown(data: Country[]) {
    this.listCountries = data.sort((a, b) => a.name.localeCompare(b.name));
  }

  getCountriesData(): void {
    this._countryService.getCountries().subscribe((data: Country[]) => {
      this.populateDropdown(data);
    });
  }

  setCountry(countryId: string) {
    this.countryIdSelected = Number(countryId);
  }

  onClickNext() {
    this.router.navigate(['/stay'], { queryParams: { selectedCountryId: this.countryIdSelected } });
  }
}
