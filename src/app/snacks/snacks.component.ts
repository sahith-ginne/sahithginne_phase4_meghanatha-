import { item } from './../item.model';
import { Component, OnInit } from '@angular/core';
import {SNACKS} from './snacks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {
 snacks: item[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.snacks = SNACKS;

  }

  buy(snack: item) {
    console.log(snack);
    this.router.navigate(['payment'], { queryParams: snack });
  }

  cart(snack: item) {
    console.log(snack);
    this.router.navigate(['cart'], { queryParams: snack });
  }
}


