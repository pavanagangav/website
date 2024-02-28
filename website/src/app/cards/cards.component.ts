import { Component } from '@angular/core';

import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  phone:Food[]=[];
  constructor(private service:FoodService){}
  ngOnInit():void{
   this.service.Onsubmit().subscribe(data=> this.phone =data);
  }

}
