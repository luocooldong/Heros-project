import { Component, OnInit } from '@angular/core';

import { HeroService } from './services/hero.service';

import { Hero } from '../assets/hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent  implements OnInit {
  constructor(private heroService: HeroService) { }

  title = 'Tour of Heros';
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
