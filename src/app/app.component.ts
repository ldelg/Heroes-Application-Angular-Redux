import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroesFacade } from '../navbar-pages/heroes-page/heroes-logic/heroes.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HeroesFacade]
})
export class AppComponent implements OnInit {
  constructor(private heroesFacade: HeroesFacade) {}

  public ngOnInit(): void {
    this.heroesFacade.loadHeroes();
  }
}
