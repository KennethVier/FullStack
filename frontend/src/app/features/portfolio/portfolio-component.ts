import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Header } from "../../components/header/header";
import { About } from "./about/about";

@Component({
  selector: 'app-portfolio-component',
  imports: [Hero, Header, About],
  templateUrl: './portfolio-component.html',
  styleUrl: './portfolio-component.scss'
})
export class PortfolioComponent {

}
