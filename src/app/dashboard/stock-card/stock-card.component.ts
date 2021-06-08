import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-models';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input()
  stock=new Stock();

  constructor() { }

  ngOnInit(): void {
  }

  get  Variation(): string{
    const localizeVariationStrting=this.stock.variation.toLocaleString();
    const prefix = this.stock.variation > 0 ? '+' : '-';
    return `${prefix} ${localizeVariationStrting.replace('-','')} %`;
  }

}
