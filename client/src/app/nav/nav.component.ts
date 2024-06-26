import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  currentUser$: Observable<User | null> = of(null);

  constructor(public accountService: AccountService, private router: Router,) { }
  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe(
      {
        next: response => {
          console.log(response);
          this.router.navigateByUrl('/members')
        },

      }
    )
  }

  logout() {
    this.accountService.logout();
    // this.loggedIn = false;
    this.router.navigateByUrl('/');
  }
}
