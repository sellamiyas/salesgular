import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenParams } from '../util/TokenParams';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AccessToken:String='';
  private TokenAPI="https://login.salesforce.com/services/oauth2/token";
  private logoutAPI="https://login.salesforce.com/services/oauth2/revoke";

  constructor(private http:HttpClient) { }

  login(username:String, password:String):Observable<TokenParams>{
    let headerTokenAPI=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded' })
    let data="grant_type=password&client_id="+environment.userSalesForce.client_id+
              "&client_secret="+environment.userSalesForce.client_secret+
              "&username="+username+"&password="+password;

    return this.http.post<TokenParams>(this.TokenAPI,data,{ headers: headerTokenAPI });
  }

  logout(){
    let headerTokenAPI=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded' })
    let data="token="+localStorage.getItem('tokenSales');
    localStorage.removeItem('tokenSlaes');
    return this.http.post(this.logoutAPI, data, {headers: headerTokenAPI});
  }

}
