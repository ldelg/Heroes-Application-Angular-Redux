import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HeroesRemote } from './heroes.remote';
import { Hero } from '../../../models/hero.model';
import { NotificationService } from '../../../services/notification.service';

@Injectable({ providedIn: 'root' })
export class HeroesFacade {
  private allHeroes: Hero[] = [];
  private heroesSubject = new BehaviorSubject<Hero[]>([]);

  constructor(
    private heroesRemote: HeroesRemote,
    private notification: NotificationService
  ) {}

  public loadHeroes(): void {
    this.heroesRemote.getHeroes$().subscribe({
      next: (heroes: Hero[]) => {
        this.allHeroes = heroes;
        this.heroesSubject.next(heroes);
      },
      error: (err) => {
        console.error('Failed to load heroes', err);
      },
    });
  }

  public getHeroes$(): Observable<Hero[]> {
    return this.heroesSubject.asObservable();
  }

  public filterHeroes(searchTerm: string): void {
    const filteredHeroes = this.allHeroes.filter((hero: Hero) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.heroesSubject.next(filteredHeroes);
  }

  public deleteHero(heroName: string): void {
    this.allHeroes = this.allHeroes.filter((hero) => hero.name !== heroName);
    this.heroesSubject.next(this.allHeroes);
    //this notification would hae to be inserted in the "next" part of the subscribe
    this.notification.showNotification(
      'Your Hero has been succesfully deleted!',
      ['deleted']
    );

    //in a real-enviroment you would also perform a post call by updating your list
    //this.heroesRemote.updateHeroes$(this.allHeroes).subscribe({
    //next: () => {
    //this.heroesSubject.next(this.allHeroes);
    //},
    //error: (err) => console.error('Failed to update heroes', err),
    //});
  }

  public addNewHero(newHero: Hero): void {
    this.allHeroes.push(newHero);
    this.heroesSubject.next(this.allHeroes);
    this.notification.showNotification(
      'Your Hero has been succesfully added!',
      ['succesfull']
    );

    // In a real enviroment scenario you might want to post this to the back-end
    /* this.heroesRemote.updateHeroes$(this.allHeroes).subscribe({
    next: (updatedHeroes) => {
      this.allHeroes = updatedHeroes;
      this.heroesSubject.next(this.allHeroes);
    },
    error: (err) => {
      console.error('Failed to update heroes', err);
    }
  });
  */
  }

  public getSelectedHero(heroName: string = ''): Hero {
    return this.allHeroes.find((hero: Hero) => hero.name === heroName)!;
  }

  public editHero(heroName: string, newData: Hero): void {
    const index = this.allHeroes.findIndex((hero) => hero.name === heroName);
    this.allHeroes[index] = { ...this.allHeroes[index], ...newData };
    this.heroesSubject.next(this.allHeroes);
    this.notification.showNotification(
      'Your Hero has been succesfully edited!',
      ['edited']
    );
  }
}
