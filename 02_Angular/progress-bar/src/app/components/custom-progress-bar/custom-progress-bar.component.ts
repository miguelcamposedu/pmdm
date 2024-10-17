import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar',
  templateUrl: './custom-progress-bar.component.html',
  styleUrl: './custom-progress-bar.component.css',
})
export class CustomProgressBarComponent {
  @Input() value = 0;

  getWidth() {
    return `width: ${this.value}%`;
  }
}
