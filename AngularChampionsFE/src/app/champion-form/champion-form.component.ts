import { Component } from '@angular/core';
import {Champion} from "../classes/champion";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-champion-form',
  templateUrl: './champion-form.component.html',
  styleUrls: ['./champion-form.component.scss']
})
export class ChampionFormComponent {

  champion?: Champion = undefined;

  championForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })
  onSubmit() {
    console.log(this.championForm.value)
  }
}
