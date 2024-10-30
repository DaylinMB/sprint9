// shared-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  selectedCountry: string = '';
  selectedVisaType: string = '';

  setCountry(country: string) {
    this.selectedCountry = country;
  }

  setVisaType(visaType: string) {
    this.selectedVisaType = visaType;
  }

  getCountry() {
    return this.selectedCountry;
  }

  getVisaType() {
    return this.selectedVisaType;
  }
}
