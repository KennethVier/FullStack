import { Component } from '@angular/core';
import { Section } from "../../../components/section/section";
import { Card } from "../../../components/card/card";

@Component({
  selector: 'app-about',
  imports: [Section, Card],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
