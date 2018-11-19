import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/util/Contact';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['email', 'firstname', 'lastname'];
    dataSource = new MatTableDataSource();
    contact:Contact[];

    constructor(private contactService:ContactService) {  }

    ngOnInit() {
        console.log('Init()');
        this.getAllContacts();
    }

    getAllContacts(){
        this.contactService.getAllContacts().subscribe(res=>{
            this.contact=res;
            this.dataSource=new MatTableDataSource(this.contact);
            console.log(this.contact);
        }, error=> console.error(error));
    }
}
