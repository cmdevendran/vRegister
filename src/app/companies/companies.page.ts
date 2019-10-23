import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

   


  constructor(private http:HttpClient) { }
  company_data = new FormGroup({
    cCompanyName: new FormControl(''),
    cCompanyID: new FormControl(''),

    cAddress1: new FormControl(''),
    cAddress2: new FormControl(''),
    cPinCode: new FormControl(''),
    cContactPerson: new FormControl(''),
    cTelephoneNumber: new FormControl(''),
    
  });

  ngOnInit() {
  }

  registerCompany() {
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type','application/json');



    
    this.http.post('http://localhost:8081/register_company', this.company_data, {headers : headers}).pipe(map(res => res)
    ).subscribe(response => {
        console.log('POST Response:', response);
    });

  

}

}
