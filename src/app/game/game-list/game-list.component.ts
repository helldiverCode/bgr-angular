import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../../model/game';
import { DEFAULT_FILTER, GameFilter } from '../../model/game-filter';
import { CommonModule } from '@angular/common';
import { GameListItemComponent } from "./game-list-item/game-list-item.component";
import { GameListFilterComponent } from "./game-list-filter/game-list-filter.component";

@Component({
  selector: 'bgr-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  imports: [CommonModule, GameListItemComponent, GameListFilterComponent]
})
export class GameListComponent implements OnInit {
  public games: Game[] = [];


  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames(DEFAULT_FILTER).subscribe((data) => {
      this.games = data;
      console.log(this.games);
    });
  }

  searchGame(filter: GameFilter) {
    console.log(filter);
    this.gameService.getGames(filter).subscribe((data) => {
      this.games = data;
      console.log('search games',this.games);
    });
  }

  getGameId(index: number, item: Game) {
    return item.id
  }
}
