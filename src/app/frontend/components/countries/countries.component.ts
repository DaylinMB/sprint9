import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, RouterModule,  ],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
})
export class CountriesComponent {
  listCountries: Country[] = [];
  countryIdSelected: number | null = null; 
  showError: boolean = false; 

  ngOnInit(): void {
    this.getCountriesData();
  }

  constructor(private router: Router, private _countryService: CountryService,
  ) {
  }

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
    if (!this.countryIdSelected) {
      this.showError = true;
      return; 
    }
    this.showError = false;
    this.router.navigate(['/stay'], { queryParams: { selectedCountryId: this.countryIdSelected } });
  }
}