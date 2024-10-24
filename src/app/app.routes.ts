import { Routes } from '@angular/router';
import { ShortDurationComponent } from './frontend/components/short-duration/short-duration.component';
import { LongStayComponent } from './frontend/components/long-stay/long-stay.component';
import { CountriesComponent } from './frontend/components/countries/countries.component';
import { StayComponent } from './frontend/components/stay/stay.component';

export const routes: Routes = [
    { path: '', component: CountriesComponent },
    { path: 'stay', component: StayComponent },
   
    // { path: '**', redirectTo: '', pathMatch: "full" }
];
