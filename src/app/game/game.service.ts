import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameFilter } from '../model/game-filter';
import { Observable, of } from 'rxjs';
import { Game } from '../model/game';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  games: Game[] = [
    {
      id: 1,
      name: 'Catan',
      description: 'A strategy board game where players collect resources and build settlements.',
      category: 'Strategy',
      minPlayers: 3,
      maxPlayers: 4,
      playTime: 90,
      ageRecommendation: 10,
      rentalPrice: 5,
      available: true,
      imageUrl: 'https://example.com/catan.jpg',
      barcode: '123456',
      quantity: 5,
      inStock: 5
    },
    {
      id: 2,
      name: 'Uno',
      description: 'A fast-paced card game where players match numbers and colors.',
      category: 'Card',
      minPlayers: 2,
      maxPlayers: 10,
      playTime: 30,
      ageRecommendation: 7,
      rentalPrice: 2,
      available: false,
      imageUrl: 'https://example.com/uno.jpg',
      barcode: '123457',
      quantity: 0,
      inStock: 0
    },
    {
      id: 3,
      name: 'Dixit',
      description: 'A creative storytelling game with beautiful illustrated cards.',
      category: 'Party',
      minPlayers: 3,
      maxPlayers: 6,
      playTime: 45,
      ageRecommendation: 8,
      rentalPrice: 4,
      available: true,
      imageUrl: 'https://example.com/dixit.jpg',
      barcode: '123458',
      quantity: 5,
      inStock: 5
    },
    {
      id: 4,
      name: 'Chess',
      description: 'A classic strategy game played on an 8x8 board.',
      category: 'Strategy',
      minPlayers: 2,
      maxPlayers: 2,
      playTime: 60,
      ageRecommendation: 6,
      rentalPrice: 3,
      available: true,
      imageUrl: 'https://example.com/chess.jpg',
      barcode: '123459',
      quantity: 5,
      inStock: 5
    }
  ];

  readonly backendUrl = environment.backendUrl;
  readonly gameUrl = environment.gameUrl;
  readonly gameSearchUrl = environment.gameSearchUrl;

  constructor(private http: HttpClient) {}

  getGames(filter: GameFilter): Observable<Game[]> {
    return of(this.games);
    // return this.http.post<Game[]>(this.backendUrl + this.gameSearchUrl, filter);
  }
}
