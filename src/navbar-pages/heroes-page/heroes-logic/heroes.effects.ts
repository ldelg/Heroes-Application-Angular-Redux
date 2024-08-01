import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HeroesRemote } from './heroes.remote';
import { map, mergeMap } from 'rxjs/operators';
import * as HeroActions from './heroes.actions';

@Injectable()
export class HeroEffects {
  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.loadHeroes),
      mergeMap(() =>
        this.heroesRemote.getHeroes$().pipe(
          map(heroes => HeroActions.setHeroes({ heroes }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private heroesRemote: HeroesRemote
  ) {}
}
