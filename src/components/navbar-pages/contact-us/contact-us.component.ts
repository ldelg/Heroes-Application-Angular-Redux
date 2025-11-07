import { Component } from "@angular/core";
import { ContactUsForm } from "../../../models/contact-us.model";
import { ContactFormFields } from "../../../constants/contact-us.constant";

@Component({
    selector: 'contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css'],
  })
  export class ContactUsComponent {
    public contactFormFields: ContactUsForm[] = ContactFormFields;
  }