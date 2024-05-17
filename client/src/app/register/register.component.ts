import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model: any = {}
  constructor(private accountService: AccountService, private toaster: ToastrService) { }
  register() {
    console.log(this.model)

    this.accountService.register(this.model).subscribe({
      next: res => {
        this.cancel()
      },
      error: err => {
        this.toaster.error(JSON.stringify(err.error))
      }
    }
    )
  }
  cancel() {
    console.log("Cancelled");
    this.cancelRegister.emit(false);
  }
}
