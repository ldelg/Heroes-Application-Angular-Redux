import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormComponent } from './hero-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: HeroFormComponent,
  },
];

@NgModule({
  declarations: [HeroFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MatLabel, MatFormField, MatInputModule, RouterModule.forChild(routes)],
})
export class HeroFormModule {}
