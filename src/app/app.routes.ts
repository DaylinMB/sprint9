import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './frontend/components/home/home.component';
import { CountriesComponent } from './frontend/components/countries/countries.component';
import { StayComponent } from './frontend/components/stay/stay.component';
import { FaqComponent } from './frontend/components/faq/faq.component';
import { HeroComponent } from './frontend/components/hero/hero.component';
// import { TabComponent } from './frontend/components/tab/tab.component';
import { Component } from '@angular/core';
import { LawyersComponent } from './frontend/components/lawyers/lawyers.component';
import { PrincipalComponent } from './frontend/components/principal/principal.component';

export const routes: Routes = [
    
    { path: '', component: HomeComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'country', component: CountriesComponent },
    { path: 'stay', component: StayComponent },
    { path: 'stay/short', component: StayComponent }, 
    { path: 'stay/long', component: StayComponent }, 
    { path: 'lawyer', component: LawyersComponent},
    { path: 'principal', component: PrincipalComponent},

    { path: 'faq', component: FaqComponent },
    // { path: 'tab', component: TabComponent }, 
];


// { path: '**', redirectTo: 'country', pathMatch: "full" } 