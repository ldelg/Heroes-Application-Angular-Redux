import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroState } from './hero.state';

export const selectHeroState = createFeatureSelector<HeroState>('heroes');

export const selectAllHeroes = createSelector(
  selectHeroState,
  (state: HeroState) => state.data
);