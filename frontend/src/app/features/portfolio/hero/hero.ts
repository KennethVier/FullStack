import { Component } from '@angular/core';
import { Section } from "../../../components/section/section";
import { Card } from "../../../components/card/card";

@Component({
  selector: 'app-hero',
  imports: [Section, Card],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}
