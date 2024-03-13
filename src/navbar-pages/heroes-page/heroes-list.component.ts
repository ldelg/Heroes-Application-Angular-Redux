import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../models/hero.model';
import { HeroesFacade } from './heroes-facade/heroes.facade';
import { State } from '../../models/state-management.model';
import { handleState } from '../../utils/state-management.util';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../modals/confirmation.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
})
export class HeroesListComponent {
  public heroesState$: Observable<State<Hero[]>> = handleState(
    this.heroesFacade.getHeroes$(),
    500
  );

  constructor(
    private heroesFacade: HeroesFacade,
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
    this.heroesFacade.getSelectedHero(hero.name);
    this.router.navigate(['/hero', hero.name]);
  }
}
