import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Discard, Hand, RemoveCard } from '../models';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {

  @Input()
  hand!: Hand

  @Input()
  discard: Discard[] = []

  @Output()
  onRemoveCard = new Subject<RemoveCard>()

  removeCard(idx: number) {
    console.info(`>>> card: ${idx}`)
    this.addToDiscard(idx)

    this.onRemoveCard.next({
      name: this.hand.name,
      cardNum: idx
    })
    
  }

  addToDiscard(idx: number) {
    console.info('card added to discard >>> ', this.hand.cards[idx])
    this.discard.push({
      suit: this.hand.cards[idx].suit,
      card: this.hand.cards[idx].card
    })
  }
  
}
