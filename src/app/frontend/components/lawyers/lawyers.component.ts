import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { LawyerService } from '../../services/lawyer.service';
import { Lawyer } from '../../interfaces/lawyer';
import { NavbottomComponent } from '../navbottom/navbottom.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-lawyers',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbottomComponent, NavbarComponent],
  templateUrl: './lawyers.component.html',
  styleUrl: './lawyers.component.css'
})
export class LawyersComponent {
  lawyers: Lawyer[] = [];

  constructor(private lawyerService: LawyerService) {}

  ngOnInit(): void {
    this.lawyerService.getLawyers().subscribe((data: Lawyer[]) => {
      this.lawyers = data;
    });
  }
}
