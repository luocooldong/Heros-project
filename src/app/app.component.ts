import { Component } from '@angular/core';

import { Hero } from '../assets/hero';


const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice Alice' },
  { id: 12, name: 'Narco. Love' },
  { id: 13, name: 'Bombasto. Story' },
  { id: 14, name: 'Celeritas. Books' },
  { id: 15, name: 'Magneta. Rain' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heros';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
