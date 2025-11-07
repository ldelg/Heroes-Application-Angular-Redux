import * as HeroActions from './heroes.actions';
import { Hero } from '../../../../models/hero.model';

describe('HeroActions', () => {
  const mockHero: Hero = {
    name: 'Hero One',
    description: 'Saves the day!',
    image: 'url-to-hero-one.jpg',
    universe: 'Marvel',
    power: 'Super Strength'
  };

  it('should create an action to load heroes', () => {
    const action = HeroActions.loadHeroes();
    expect(action.type).toBe('[Hero] Load Heroes');
  });

  it('should create an action to set heroes with payload', () => {
    const heroes: Hero[] = [mockHero];
    const action = HeroActions.setHeroes({ heroes });
    expect(action.type).toBe('[Hero] Set Heroes');
    expect(action.heroes).toEqual(heroes);
  });

  it('should create an action to add a hero with payload', () => {
    const hero: Hero = { ...mockHero, name: 'Hero Two', image: 'url-to-hero-two.jpg' };
    const action = HeroActions.addHero({ hero });
    expect(action.type).toBe('[Hero] Add Hero');
    expect(action.hero).toEqual(hero);
  });

  it('should create an action to delete a hero with payload', () => {
    const heroName = 'Hero Two';
    const action = HeroActions.deleteHero({ heroName });
    expect(action.type).toBe('[Hero] Delete Hero');
    expect(action.heroName).toBe(heroName);
  });

  it('should create an action to edit a hero with payload', () => {
    const heroName = 'Hero One';
    const newData: Hero = { ...mockHero, power: 'Invisibility' };
    const action = HeroActions.editHero({ heroName, newData });
    expect(action.type).toBe('[Hero] Edit Hero');
    expect(action.heroName).toBe(heroName);
    expect(action.newData).toEqual(newData);
  });

  it('should create an action to filter heroes with payload', () => {
    const searchTerm = 'One';
    const action = HeroActions.filterHeroes({ searchTerm });
    expect(action.type).toBe('[Hero] Filter Heroes');
    expect(action.searchTerm).toBe(searchTerm);
  });
});
