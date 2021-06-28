import { item } from './../item.model';
import { Component, OnInit } from '@angular/core';
import { BISCUITS } from './biscuits';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biscuits',
  templateUrl: './biscuits.component.html',
  styleUrls: ['./biscuits.component.css']
})
export class BiscuitsComponent implements OnInit {
biscuits: item[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.biscuits = BISCUITS;

  }

  buy(biscuit: item) {
    console.log(biscuit);
    this.router.navigate(['payment'], { queryParams: biscuit });
  }

  cart(biscuit: item) {
    console.log(biscuit);
    this.router.navigate(['cart'], { queryParams: biscuit });
}
}


