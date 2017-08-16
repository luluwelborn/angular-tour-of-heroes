import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
	selector: 'hero-detail',
	template: `
  	<div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>`
})

// this export component is here do it can be imported by other files
export class HeroDetailComponent	{
	@Input() hero: Hero;
}