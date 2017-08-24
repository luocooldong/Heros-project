import { Injectable } from '@angular/core';

import { Hero } from '../../assets/hero';
import { HEROES } from '../../assets/mock-heroes';

@Injectable()
export class HeroService {
  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

}
