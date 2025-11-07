import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../../../../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesRemote {
  constructor(private http: HttpClient) {}

  public getHeroes$(): Observable<Hero[]> {
    return this.http.get<Hero[]>('assets/mock-data.json');
  }

  public updateHeroes$(heroes: Hero[]): Observable<Hero[]> {
    return this.http.post<Hero[]>('your-api-endpoint', heroes);
  }
}
