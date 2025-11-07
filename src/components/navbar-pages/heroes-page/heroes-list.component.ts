import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../../models/hero.model';
import { HeroesFacade } from './heroes-logic/heroes.facade';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../../modals/confirmation.modal';
import { Router } from '@angular/router';
import { HeroState } from './heroes-logic/hero.state';
import { HeroStateService } from './heroes-logic/heroes-service/heroes.service';

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
})
export class HeroesListComponent {
  public heroesState$: Observable<HeroState> = this.heroesFacade.getHeroes$()

  constructor(
    private heroesFacade: HeroesFacade,
    private heroesStateService: HeroStateService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  public deleteHero(name: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '250px',
      data: { name: name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroesFacade.deleteHero(name);
      }
    });
  }

  public editHero(hero: Hero): void {
    this.heroesStateService.hero = hero;
    this.router.navigate(['/hero', hero.name]);
  }
}
