import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [CommonModule],
  templateUrl: './section.html',
  styleUrl: './section.scss'
})
export class Section {
  /**
   * Tailwind or CSS class for background.
   * Example: "bg-gray-100" or "bg-blue-500"
   */
  @Input() bgClass?: string;

  /**
   * Inline styles object for background.
   * Example: [bgStyle]="{ 'background-color': '#F0F7FF' }"
   */
  @Input() bgStyle: { [key: string]: any } = {};
}
