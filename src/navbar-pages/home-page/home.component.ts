import { Component } from '@angular/core';
import { HomeCard } from '../../models/home-card.model';
import { HOMECARD } from '../../constants/home-card.constant';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public homeCards: HomeCard[] = HOMECARD;
}