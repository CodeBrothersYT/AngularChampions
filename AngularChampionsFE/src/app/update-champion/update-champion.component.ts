import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ChampionService} from "../services/champion.service";
import {Champion} from "../classes/champion";
import {catchError, of, tap} from "rxjs";

@Component({
  selector: 'app-update-champion',
  templateUrl: './update-champion.component.html',
  styleUrls: ['./update-champion.component.scss']
})
export class UpdateChampionComponent implements OnInit {

  id?: number;
  champion: Champion = new Champion();
  constructor(private championService: ChampionService,
              private activatedRoute: ActivatedRoute){}


  championForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.championService.getChampionById(this.id)
      .pipe(
        tap(champion => {
          this.champion = champion;
          this.championForm.patchValue(champion);
        }),
        catchError(error => {
          console.log(error);
          return of(null);
        })
      )
      .subscribe();
  }

  onSubmit() {
    if(this.championForm.valid){
      console.log("Form submitted!")
    }
  }
}
