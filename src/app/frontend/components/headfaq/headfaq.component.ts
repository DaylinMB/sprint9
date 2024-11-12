import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-headfaq',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './headfaq.component.html',
  styleUrl: './headfaq.component.css',
})
export class HeadfaqComponent {
  @Output() closeEvent = new EventEmitter<void>();

  constructor(private router: Router) {}
  
  close() {
    this.closeEvent.emit();
  }


  onClickNext() {
    this.router.navigate(['/lawyer'],);
  }
}
