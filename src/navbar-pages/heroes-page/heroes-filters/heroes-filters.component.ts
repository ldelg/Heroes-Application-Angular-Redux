import { Component } from '@angular/core';
import { HeroesFacade } from '../heroes-facade/heroes.facade';

@Component({
  selector: 'heroes-filters',
  templateUrl: './heroes-filters.component.html',
  styleUrl: './heroes-filters.component.css',
})
export class HeroesFilters {
  public searchTerm: string = '';

  constructor(private heroesFacade: HeroesFacade) {}

  public onSearchChange(searchTerm: string = this.searchTerm): void {
    this.heroesFacade.filterHeroes(searchTerm);
  }

  public clearSearch(): void {
    this.searchTerm = '';
    this.onSearchChange();
  }
}
