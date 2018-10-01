import { Component, OnInit } from '@angular/core';
import { UserAccessService } from "../../services/user-access.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
errorMessage:string;
 constructor(private userAccess: UserAccessService, private router: Router) { }

  ngOnInit() {
  }
  
  onSignin (Email, Password) {
    this.userAccess.registerUser({Email, Password})
      .pipe(first())
      .subscribe(
        data => {        
          this.router.navigate(['/login']);
        },
        error => {         
          this.errorMessage = error.error.errorMessage;
        }
      )
  }

}
