import { Component} from '@angular/core';
import { RandomService } from './random.service';
import {Input} from '@angular/core'

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  myNumber = 0
  @Input()
  max = 100;
  constructor(
    private randomService: RandomService
  ) {}

  setNewRandomValue() {
    this.myNumber = this.randomService.getRandomNumber(this.max);
  }
 
}