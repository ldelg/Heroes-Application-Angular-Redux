import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { HeroesFiltersModule } from './heroes-filters/heroes-filters.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../../modals/confirmation.modal';

const routes: Routes = [{ path: '', component: HeroesListComponent }];

@NgModule({
  declarations: [HeroesListComponent, ConfirmationDialog],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    HeroesFiltersModule,
    RouterModule.forChild(routes),
  ],
})
export class HeroesListModule {}
