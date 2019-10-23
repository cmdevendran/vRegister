import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  registerCompany = new FormGroup({
    cCompanyName: new FormControl(''),
    cCompanyID: new FormControl(''),

    cAddress1: new FormControl(''),
    cAddress2: new FormControl(''),
    cPinCode: new FormControl(''),
    cContactPerson: new FormControl(''),
    cTelephoneNumber: new FormControl(''),
    
  });

  constructor() { }

  ngOnInit() {
  }

}
