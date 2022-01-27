import { Component, Input, OnInit } from '@angular/core';
import { bloomDetails } from '../models/bloomData';

@Component({
  selector: 'app-bloom-card',
  templateUrl: './bloom-card.component.html',
  styleUrls: ['./bloom-card.component.css']
})
export class BloomCardComponent {

  @Input() bloomObject:bloomDetails={
    bloomHead:'string',
    bloomTitle:'string',
    bloomImage:'string',
    Description:'string',
    Date:'string'
  }
}
  
