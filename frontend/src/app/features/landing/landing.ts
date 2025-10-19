import { Component } from '@angular/core';
import { Section } from "../../components/section/section";
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-landing',
  imports: [Section, Card],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  onCTA(){
    alert('CTA clicked!');
  }
}
