import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../../models/hero.model';
import { NotificationService } from '../../../services/notification.service';
import { Store, select } from '@ngrx/store';
import { HeroState } from './hero.state';
import * as HeroActions from './heroes.actions';
import * as HeroSelectors from './heroes.selectors';

@Injectable({ providedIn: 'root' })
export class HeroesFacade {
  constructor(
    private notification: NotificationService,
    private store: Store<HeroState>,
  ) {}

  public loadHeroes(): void {
    this.store.dispatch(HeroActions.loadHeroes());
  }

  public getHeroes$(): Observable<HeroState> {
    return this.store.pipe(select(HeroSelectors.selectHeroState));
  }

  public filterHeroes(searchTerm: string): void {
    this.store.dispatch(HeroActions.filterHeroes({ searchTerm }));
  }

  public deleteHero(heroName: string): void {
    this.store.dispatch(HeroActions.deleteHero({ heroName }));
    this.notification.showNotification(
      'Your Hero has been successfully deleted!',
      ['deleted']
    );
  }

  public addNewHero(newHero: Hero): void {
    this.store.dispatch(HeroActions.addHero({ hero: newHero }));
    this.notification.showNotification(
      'Your Hero has been successfully added!',
      ['successful']
    );
  }

  public editHero(heroName: string, newData: Hero): void {
    this.store.dispatch(HeroActions.editHero({ heroName, newData }));
    this.notification.showNotification(
      'Your Hero has been successfully edited!',
      ['edited']
    );
  }

  public getSelectedHero(heroName: string) {
    this.store.dispatch(HeroActions.setSelectedHero({ heroName }));
  }
}
