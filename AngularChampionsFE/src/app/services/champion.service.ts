import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Champion} from "../classes/champion";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private baseURL = "http://localhost:8080/api/v1/champions";
  constructor(private httpClient: HttpClient) { }

  getChampions() : Observable<Champion[]> {
    return this.httpClient.get<Champion[]>(`${this.baseURL}`)
  }
}
