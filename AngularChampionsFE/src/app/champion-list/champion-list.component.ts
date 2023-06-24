import { Component } from '@angular/core';
import {Champion} from "../champion";

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss']
})
export class ChampionListComponent {
  champions: Champion[] = [];

}
