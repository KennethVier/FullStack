import { Component } from '@angular/core';
import { Section } from "../../components/section/section";
import { Card } from "../../components/card/card";
import { Penguin } from "../../shared/penguin/penguin";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [Section, Card, Penguin],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  constructor(private router: Router) {}

  onCTA(){
    this.router.navigate(['/portfolio']);
    //this.router.navigate(['/portfolio'], { fragment: 'projects' });
  }
}
