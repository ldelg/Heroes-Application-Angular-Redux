import { createAction, props } from '@ngrx/store';
import { Hero } from '../../../../models/hero.model';

export const loadHeroes = createAction('[Hero] Load Heroes');
export const setHeroes = createAction('[Hero] Set Heroes', props<{ heroes: Hero[] }>());

export const addHero = createAction('[Hero] Add Hero', props<{ hero: Hero }>());
export const deleteHero = createAction('[Hero] Delete Hero', props<{ heroName: string }>());
export const editHero = createAction('[Hero] Edit Hero', props<{ heroName: string, newData: Hero }>());

export const filterHeroes = createAction('[Hero] Filter Heroes', props<{ searchTerm: string }>());