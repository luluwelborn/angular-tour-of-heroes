import { Injectable } from '@angular/core';

import { Hero } from './hero';

import { HEROES } from './mock-heroes';

// Injectable is an Angular function, 
// this applies it as a decorator
@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {  //promises to call back when the results are ready
		return Promise.resolve(HEROES);
	}
}



// Simulate Slow Connection
// getHeroesSlowly(): Promise<Hero[]> {
//   return new Promise(resolve => {
//     // Simulate server latency with 2 second delay
//     setTimeout(() => resolve(this.getHeroes()), 2000);
//   });
// }
// 
// also change getHeroes() with getHeroesSlowly() in AppComponent