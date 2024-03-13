export interface FormField {
    label: string;
    placeholder: string;
    controlName: string;
    type?: string;
  }

export interface FormFieldsStructure {
    main: FormField[];
    description: FormField;
  }