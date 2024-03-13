import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { HeroesFilters } from './heroes-filters.component';

@NgModule({
  declarations: [HeroesFilters],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [HeroesFilters]
})
export class HeroesFiltersModule {}