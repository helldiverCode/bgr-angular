import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DEFAULT_FILTER, GameFilter } from '../../../model/game-filter';

@Component({
  selector: 'bgr-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.css']
})
export class GameListFilterComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<GameFilter>();

  fiter: GameFilter = DEFAULT_FILTER;

  constructor() { }

  ngOnInit() {
  }

  searchGame() {
    this.searchEvent.emit(this.fiter);
  }
}
