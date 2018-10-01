import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { StockServiceService } from '../../services/stock-service.service';
import { Istockdata } from "../../interface/Istockdata.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-stock-productivity-calculator',
  templateUrl: './stock-productivity-calculator.component.html',
  styleUrls: ['./stock-productivity-calculator.component.css']
})
export class StockProductivityCalculatorComponent implements OnInit {
  model: any;
  capitalAmount: number;
  price: number;
  stockName: string;
  years: number;
  quantity: number;
  percentage: number;  
  stockData:Istockdata;
  viewDetailes: boolean = false;
  viewAllStock: boolean = false;
  displayStockInfo: any;
  stockDetails: any;
  constructor(private stockservice: StockServiceService, private router: Router) { }

  ngOnInit() {
  }
  viewstockcal() {
    this.viewAllStock = false;
  }
  onSubmit(form) {
    this.price = form.price;
    this.quantity = form.quantity;
    this.stockName = form.stockName;
    this.years = form.years;
    this.percentage = form.percentage;
    this.stockData = form;
    this.stockData.princpleintrest = this.calculateStock();
    this.stockservice.addStock(JSON.stringify(this.stockData))
          .pipe(first())
          .subscribe(
            data => {
              this.viewDetailes = true;
            },
            error => {
              console.log(error.error.message);
            }          
    )
  }

  calculateStock() {
    let obj = [];
    this.capitalAmount = this.price * this.quantity; 
      for(let i = 0; i <= this.years; i++){
        if(i == 0){
          obj.push(this.capitalAmount.toFixed(2));
        }else{
          this.capitalAmount  += this.calculateIntrest(this.capitalAmount, this.percentage);
          obj.push(this.capitalAmount.toFixed(2));
        }
    }
    return obj;
  }

  calculateIntrest(capitalAmount,  Percentage) {
    return (capitalAmount * Percentage)/100;
  } 

  viewAllStocks() {
    this.router.navigate(['/StockDetails']);
  }
}
