import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-visitor-register',
  templateUrl: './visitor-register.page.html',
  styleUrls: ['./visitor-register.page.scss'],
})
export class VisitorRegisterPage implements OnInit {

  vRegister = new FormGroup({
    vFirstName: new FormControl(''),
    vLastName: new FormControl(''),
    vCompanyFrom: new FormControl(''),
    vIDType : new FormControl(''),
    vIDNumber: new FormControl(''),
    vToCompany : new FormControl(''),
    vToMeet : new FormControl(''),
    vMeeingDept : new FormControl(''),
    vPurpose : new FormControl(''),
    vModeOfTransport : new FormControl(''),
    vPassNo : new FormControl(''),
    vIssueDate : new FormControl(''),
    vReturnDate : new FormControl('')
  });


  constructor() { }

  ngOnInit() {

    
    
  }

}
