import { createReducer, on } from '@ngrx/store';
import {  initialState } from './hero.state';
import * as HeroActions from './heroes.actions';

export const heroReducer = createReducer(
    initialState,

      on(HeroActions.setHeroes, (state, { heroes }) => ({
        ...state,
        isLoading: false,
        data: heroes,
        filteredData: heroes,
        error: null
      })),

      on(HeroActions.addHero, (state, { hero }) => ({
        ...state,
        data: [...state.data, hero],
        filteredData: [...state.filteredData, hero]
      })),

      on(HeroActions.deleteHero, (state, { heroName }) => ({
        ...state,
        data: state.data.filter(hero => hero.name !== heroName),
        filteredData: state.filteredData.filter(hero => hero.name !== heroName)
      })),

      on(HeroActions.editHero, (state, { heroName, newData }) => ({
        ...state,
        data: state.data.map(h => h.name === heroName ? { ...h, ...newData } : h),
        filteredData: state.data.map(h => h.name === heroName ? { ...h, ...newData } : h)
      })),

      on(HeroActions.filterHeroes, (state, { searchTerm }) => ({
        ...state,
        filteredData: state.data.filter(hero => hero.name.toLowerCase().includes(searchTerm.toLowerCase()))
      })),
);