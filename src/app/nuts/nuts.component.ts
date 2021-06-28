import { item } from './../item.model';
import { Component, OnInit } from '@angular/core';
import {NUTS} from './nuts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nuts',
  templateUrl: './nuts.component.html',
  styleUrls: ['./nuts.component.css']
})
export class NutsComponent implements OnInit {
  nuts: item[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.nuts=NUTS;
  }

  buy(nut: item) {
    console.log(nut);
    this.router.navigate(['payment'], { queryParams: nut });
  }

  cart(nut: item) {
    console.log(nut);
    this.router.navigate(['cart'], { queryParams: nut });
  }
}


