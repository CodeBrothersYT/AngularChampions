import {Component, OnInit} from '@angular/core';
import {Champion} from "../../classes/champion";
import {ChampionService} from "../../services/champion.service";

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss']
})
export class ChampionListComponent implements OnInit{

  champions: Champion[] = [];


  constructor(private championService: ChampionService) {
  }

  ngOnInit(): void {
    this.getChampions();
  }

  private getChampions(): void {
    this.championService.getChampions().subscribe(champions => {
      console.error(champions)
      this.champions = champions;
    })
  }
}
