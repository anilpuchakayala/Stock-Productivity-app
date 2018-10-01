import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StockProductivityCalculatorComponent } from './components/stock-productivity-calculator/stock-productivity-calculator.component';
import { StockServiceService } from "./services/stock-service.service";
import { UserAccessService } from "./services/user-access.service";
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StockProductivityCalculatorComponent,
    StockDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [StockServiceService, UserAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
