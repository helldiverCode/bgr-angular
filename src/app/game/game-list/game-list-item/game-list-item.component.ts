import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../../model/game';

@Component({
  selector: 'bgr-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css']
})
export class GameListItemComponent implements OnInit {

  @Input() game: Game = {};

  constructor() { }

  ngOnInit() {
  }

}
