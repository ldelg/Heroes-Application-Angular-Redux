import { Injectable } from '@angular/core';
import { Hero } from '../../../models/hero.model';
import { HeroStructure } from '../../../constants/hero-state.constat';

@Injectable({
  providedIn: 'root'
})
export class HeroStateService {
  private currentHero: Hero = HeroStructure;

  set hero(hero: Hero) {
    this.currentHero = hero;
  }

  get hero(): Hero{
    return this.currentHero;
  }

  clearHero(): void {
    this.currentHero = HeroStructure; 
  }
}