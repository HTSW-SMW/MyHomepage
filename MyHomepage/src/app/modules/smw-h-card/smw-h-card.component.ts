import { Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'smw-h-card',
  standalone: false,
  
  templateUrl: './smw-h-card.component.html',
  styleUrl: './smw-h-card.component.css'
})
export class SmwHCardComponent {
  @Input() data: Card;
}
