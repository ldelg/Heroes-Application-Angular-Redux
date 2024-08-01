import { Hero } from "../../../models/hero.model";

export interface HeroState {
  isLoading: boolean;
  data: Hero[];
  filteredData: Hero[];
  error: any;
  selectedHero?: Hero;
}

export const initialState: HeroState = {
  isLoading: false,
  data: [],
  filteredData: [],
  error: null,
  selectedHero: undefined,
};