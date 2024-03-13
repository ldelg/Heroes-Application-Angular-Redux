import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../models/hero.model';
import { HeroesFacade } from '../heroes-page/heroes-facade/heroes.facade';
import { FormFields } from '../../constants/hero-form.constant';
import { FormFieldsStructure } from '../../models/hero-form.model';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent implements OnInit {
  public heroForm!: FormGroup;
  public isEditMode: boolean = false;
  public uploadedImageUrl: string =
    'https://cliparts.co/cliparts/Aib/raq/AibraqG8T.jpg';
  public FormFields: FormFieldsStructure = FormFields;
  public currentHero: Hero = {
    name: '',
    power: '',
    universe: '',
    image: '',
    description: '',
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private heroesFacade: HeroesFacade
  ) {}

  public ngOnInit(): void {
    const heroName = this.route.snapshot.paramMap.get('name');
    if (heroName) {
      this.isEditMode = true;
      this.currentHero = this.heroesFacade.getSelectedHero(heroName);
      this.initializeForm(this.currentHero);
    } else {
      this.initializeForm();
    }
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
