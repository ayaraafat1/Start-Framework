import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  nameInputValue:string='';
  ageInputValue:string='';
  emailInputValue:string='';
  passwordInputValue:string='';
  submitForm(e:SubmitEvent):void
  {
    e.preventDefault();
  }

}
