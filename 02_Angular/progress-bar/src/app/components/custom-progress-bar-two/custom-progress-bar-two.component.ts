import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar-two',
  templateUrl: './custom-progress-bar-two.component.html',
  styleUrl: './custom-progress-bar-two.component.css',
})
export class CustomProgressBarTwoComponent {
  @Input() progreso = 80;

  getProgressColor(): string {
    if (this.progreso <= 25) {
      return 'danger';
    } else if (this.progreso > 25 && this.progreso <= 50) {
      return 'warning';
    } else if (this.progreso > 50 && this.progreso <= 75) {
      return 'primary';
    } else {
      return 'success';
    }
  }
}
