import { Component, OnInit } from '@angular/core';
import { UserAccessService } from "../../services/user-access.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errorMessage: string;
  constructor(private userAccess: UserAccessService, private router: Router) { }

  ngOnInit() {
  }

  onLogIn (Email, Password) {  
    this.userAccess.checkLoggedInUser({Email, Password})
      .pipe(first())
      .subscribe(
        data => {         
          this.router.navigate(['/StockProductivityCalculator']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.Error;
        }
      )
  }

}
