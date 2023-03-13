import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {

  @Input()
  cardNum=0
  values: String[] = [
    '1', '2', '3', '4', '5', 
    '6', '7', '8', '9', '10',
    'J', 'Q', 'K'
  ]

  suites: String[] = [
    'Clover', 
    'Diamond', 
    'Heart', 
    'Spade'
  ]

  removeCard() {
    this.cardNum = 0
    console.info('Card Dropped Button Pressed')
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

}
