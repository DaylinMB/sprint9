import { Routes, RouterModule } from '@angular/router';

import { CountriesComponent } from './frontend/components/countries/countries.component';
import { StayComponent } from './frontend/components/stay/stay.component';
import { FaqComponent } from './frontend/components/faq/faq.component';

export const routes: Routes = [
    
    { path: '', component: CountriesComponent },
    { path: 'stay', component: StayComponent },
    { path: 'faqs/:visaType', component: FaqComponent },
   
];

// { path: '**', redirectTo: 'country', pathMatch: "full" } 