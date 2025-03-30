import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GameFilter } from '../../../model/game-filter';

@Component({
  selector: 'bgr-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule, ReactiveFormsModule]
})
export class GameListFilterComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<GameFilter>();

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      searchTerm: [''],
      category: [''],
      minPlayers: [null],
      maxPlayers: [null],
      maxPlayTime: [null],
      ageRecommendation: [null],
      minRating: [null],
      availableOnly: [false]
    });
  }

  ngOnInit(): void {}

  searchGame() {
    this.searchEvent.emit(this.filterForm.value);
  }

  resetFilters() {
    this.filterForm.reset({
      searchTerm: '',
      category: '',
      minPlayers: null,
      maxPlayers: null,
      maxPlayTime: null,
      ageRecommendation: null,
      minRating: null,
      availableOnly: false
    });
  }
}
