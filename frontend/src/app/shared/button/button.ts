import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input({required: true}) type!: 'button' | 'submit';
  @Output() click = new EventEmitter<void>();

  onButtonClicked() {
    this.click.emit();
  }
}
