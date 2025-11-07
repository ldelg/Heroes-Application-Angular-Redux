import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { heroReducer } from '../components/navbar-pages/heroes-page/heroes-logic/heroes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from '../components/navbar-pages/heroes-page/heroes-logic/heroes.effects';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    StoreModule.forRoot({ heroes: heroReducer }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([HeroEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
