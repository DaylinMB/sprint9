import { Routes, RouterModule } from '@angular/router';

import { CountriesComponent } from './frontend/components/countries/countries.component';
import { StayComponent } from './frontend/components/stay/stay.component';

export const routes: Routes = [
    
    { path: '', component: CountriesComponent },
    { path: 'stay', component: StayComponent },
   
    // { path: '**', redirectTo: 'country', pathMatch: "full" } 
];
