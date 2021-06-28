import { item } from './../item.model';
import { Component, OnInit } from '@angular/core';
import {FRUITS} from './fruits';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits: item[] = [];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.fruits = FRUITS;
  }

  buy(fruit: item) {
    console.log(fruit);
    this.router.navigate(['payment'], { queryParams: fruit });
  }
  cart(fruit: item) {
    console.log(fruit);
    this.router.navigate(['cart'], { queryParams:fruit});
  }
}


