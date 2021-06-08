import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import  Stock  from '../../shared/models/stock-models';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks:Stock[]=[];

  constructor(private DashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchStock();
  }

  async fetchStock(): Promise<void>{
    this.stocks= await this.DashboardService.getStocks();
    console.log(this.stocks);
   // console.log(this.stocks[1].data);
  }

}
