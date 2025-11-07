import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from '../../../models/hero.model';
import { FormFields } from '../../../constants/hero-form.constant';
import { FormFieldsStructure } from '../../../models/hero-form.model';
import { HeroStructure } from '../../../constants/hero-state.constat';
import { HeroesFacade } from '../heroes-page/heroes-logic/heroes.facade';
import { HeroStateService } from '../heroes-page/heroes-logic/heroes-service/heroes.service';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent implements OnInit, OnDestroy {
  public heroForm!: FormGroup;
  public isEditMode: boolean = false;
  public uploadedImageUrl: string =
    'https://cliparts.co/cliparts/Aib/raq/AibraqG8T.jpg';
  public FormFields: FormFieldsStructure = FormFields;
  public currentHero: Hero = HeroStructure;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private heroesFacade: HeroesFacade,
    private heroStateService: HeroStateService,
  ) {}

  public ngOnInit(): void {
    this.isEditMode = !!this.heroStateService.hero.name;
    if (this.isEditMode) {
      this.currentHero = this.heroStateService.hero;
      this.initializeForm(this.currentHero);
    } else {
      this.initializeForm();
    }
  }

  public ngOnDestroy(): void {
    this.heroStateService.clearHero(); 
  }

  private initializeForm(hero?: Hero): void {
    this.heroForm = this.fb.group({
      name: [hero?.name || '', Validators.required],
      power: [hero?.power || '', Validators.required],
      universe: [hero?.universe || '', Validators.required],
      image: [hero?.image || this.uploadedImageUrl],
      description: [hero?.description || ''],
    });
  }

  public onFileChanged(event: Event): void {
    let reader = new FileReader();
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      let file = input.files[0];

      reader.onload = () => {
        const imageUrl = reader.result as string;
        this.heroForm.patchValue({ image: imageUrl });
        this.uploadedImageUrl = imageUrl;
      };

      reader.readAsDataURL(file);
    }
  }

  public saveHero(): void {
    if (this.heroForm.valid) {
      const formValue = this.heroForm.value;
      if (this.isEditMode) {
        this.heroesFacade.editHero(this.currentHero.name, formValue);
      } else {
        this.heroesFacade.addNewHero(formValue);
      }
      this.router.navigate(['/heroes']);
    }
  }
}
