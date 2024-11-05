import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headfaq',
  standalone: true,
  imports: [],
  templateUrl: './headfaq.component.html',
  styleUrl: './headfaq.component.css'
})
export class HeadfaqComponent {

  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
}
}
