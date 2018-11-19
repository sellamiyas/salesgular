import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private api = environment.salesForce_API;
  constructor(private http: HttpClient, private authService: AuthService) { }

  get<T>(url: string): Observable<T> {
    let headers = new HttpHeaders();
    // this.authService.login(environment.userSalesForce.username, environment.userSalesForce.password)
    //   .subscribe(res => {
    //     this.authService.AccessToken = res.access_token;
    //   });

    // if (this.authService.AccessToken) {
    //   headers.append('Authorization', 'Bearer ' + this.authService.AccessToken);
    // }
    return this.http.get<T>(this.api + url);
  }

}
