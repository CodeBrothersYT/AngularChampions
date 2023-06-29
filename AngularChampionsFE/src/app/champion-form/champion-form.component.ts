import { Component } from '@angular/core';
import {Champion} from "../classes/champion";
import {FormControl, FormGroup} from "@angular/forms";
import {ChampionService} from "../services/champion.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-champion-form',
  templateUrl: './champion-form.component.html',
  styleUrls: ['./champion-form.component.scss']
})
export class ChampionFormComponent {

  champion: Champion = new Champion();

  constructor(private championService: ChampionService,
              private router: Router) {

  }

  championForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  saveChampion(championFormValue: FormGroup) {
    this.championService.createChampion({...championFormValue.value})
      .pipe(
        tap(champion => {
          this.navigateToChampionList();
        })
      )
      .subscribe(
        error => console.error(error)
      );
  }

  navigateToChampionList(){
    this.router.navigate(['/champions'])
  }
  onSubmit() {
    if(this.championForm.valid){
      console.log("Form submitted!")
      this.saveChampion(this.championForm)
    }
  }
}
