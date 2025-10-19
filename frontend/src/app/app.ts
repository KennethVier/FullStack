import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./shared/button/button";
import { Landing } from "./features/landing/landing";

@Component({
  selector: 'app-root',
  imports: [Button, Landing],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');

  onButtonClicked() {
    console.log('Button clicked!');
  }
}
