import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { StockProductivityCalculatorComponent } from './components/stock-productivity-calculator/stock-productivity-calculator.component';
import { SignupComponent } from "./components/signup/signup.component";
import { StockDetailsComponent } from "./components/stock-details/stock-details.component";


const routes: Routes = [
    { path: 'StockProductivityCalculator', component: StockProductivityCalculatorComponent},
    { path: 'StockDetails', component: StockDetailsComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path : '', redirectTo:'/login', pathMatch : 'full'},
    { path : '**', redirectTo:'/login'}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
  })
  export class RoutingModule { }