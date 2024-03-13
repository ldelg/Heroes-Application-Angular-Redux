import { FormFieldsStructure } from '../models/hero-form.model';

export const FormFields: FormFieldsStructure = {
  main: [
    {
      label: 'Name',
      placeholder: 'Hero Name',
      controlName: 'name',
    },
    {
      label: 'Power',
      placeholder: 'Hero Power',
      controlName: 'power',
    },
    {
      label: 'Universe',
      placeholder: 'Hero Universe',
      controlName: 'universe',
    },
  ],
  description: {
    label: 'Description (Optional)',
    placeholder: 'Describe the hero',
    controlName: 'description',
  },
};
