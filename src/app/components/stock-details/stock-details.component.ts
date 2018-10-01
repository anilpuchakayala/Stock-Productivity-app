import { Component, OnInit } from '@angular/core';
import { StockServiceService } from "../../services/stock-service.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";


@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
   displayStockDetails:any;
   showDetailes: any;
   dataAvilabel: boolean = false;
   showDetailesAvilable: boolean = false;
  constructor(private stockservice: StockServiceService,  private router: Router) { }

  ngOnInit() {
    this.viewAllStocks();
  }
  viewstockcal() {
    this.router.navigate(['/StockProductivityCalculator']);
  }
  showDetailedData(data) {
    this.showDetailes = data;
    this.showDetailesAvilable = true;
  }
  viewAllStocks() {
    this.stockservice.allStock()
          .pipe(first())
          .subscribe(
            data => {
              this.dataAvilabel = true;
              this.displayStockDetails = data;
            },
            error => {
              console.log(error.error.message);
            }          
    )
  }
}
