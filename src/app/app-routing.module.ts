import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('../components/navbar-pages/home-page/home.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('../components/navbar-pages/heroes-page/heroes-list.module').then(
        (m) => m.HeroesListModule
      ),
  },
  {
    path: 'hero/new',
    loadChildren: () =>
      import('../components/navbar-pages/hero-form/hero-form.module').then(
        (m) => m.HeroFormModule
      ),
  },
  {
    path: 'hero/:name',
    loadChildren: () =>
      import('../components/navbar-pages/hero-form/hero-form.module').then(
        (m) => m.HeroFormModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('../components/navbar-pages/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
