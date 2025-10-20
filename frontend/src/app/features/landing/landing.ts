import { Component } from '@angular/core';
import { Section } from "../../components/section/section";
import { Card } from "../../components/card/card";
import { Penguin } from "../../shared/penguin/penguin";

@Component({
  selector: 'app-landing',
  imports: [Section, Card, Penguin],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  onCTA(){
    alert('CTA clicked!');
  }
}
