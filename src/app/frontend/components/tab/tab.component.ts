import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LawyersComponent } from "../lawyers/lawyers.component";
import { FaqComponent } from "../faq/faq.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { HeadfaqComponent } from "../headfaq/headfaq.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [LawyersComponent, FaqComponent, NavbarComponent, HeadfaqComponent, CommonModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  showHeadfaq: boolean = true;
  selectedTab: string = 'editors-pick'; // Valor por defecto

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Suscríbete a los cambios de parámetros de la URL
    this.route.queryParamMap.subscribe(params => {
      this.selectedTab = params.get('selectedTab') || 'editors-pick'; // Establece la pestaña activa
    });
  }
}
