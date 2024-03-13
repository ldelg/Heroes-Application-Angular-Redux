import { ContactUsForm } from "../models/contact-us.model";

export const ContactFormFields: ContactUsForm[] = [
    { label: 'Name', type: 'text' },
    { label: 'Email address', type: 'email' },
    { label: 'Subject', type: 'text' },
    { label: 'Message', type: 'textarea' },
  ];
  