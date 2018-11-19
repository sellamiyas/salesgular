import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';
import { Observable } from 'rxjs';
import { Contact } from '../util/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private networkService:NetworkService) { }

  getAllContacts():Observable<Contact[]>{
      
    return this.networkService.get<Contact[]>("/services/apexrest/getContacts");
  }

}
