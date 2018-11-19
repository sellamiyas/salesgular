import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import { TokenParams } from '../util/TokenParams';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    tokenParams: TokenParams;
    username = new FormControl('', [Validators.required]);
    password= new FormControl('', [Validators.required]);
    isError: boolean = false;
    constructor(private router: Router, private autservice: AuthService) { }

    ngOnInit() { }
    getErrorMessage() {
        return this.username.hasError('required') ? 'You must enter a value' :
            this.username.hasError('incorrect') ? 'Not a valid email' :
                '';
      }
    onLogin() {
        // this.autservice.login(environment.userSalesForce.username,environment.userSalesForce.password)
        this.autservice.login(this.username.value, this.password.value+"0pQgjvRZGmXuNSK71obRjIgS")
            .subscribe(res => {
                this.tokenParams = res;
                this.autservice.AccessToken = res.access_token;
                console.log(res);
                localStorage.setItem('tokenSales', <string>res.access_token);
                this.router.navigate(['/dashboard']);
            }, error => {
                this.isError = true;
                this.username.setErrors({'incorrect':true})
                console.error(error)
            })
    }
}
