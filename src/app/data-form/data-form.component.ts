import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {
  gender: any = ['male', 'female']
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    PhoneNumber: new FormControl('',),
    email: new FormControl('', [Validators.required, Validators.email]),
    Account_No: new FormControl('', Validators.required),
    IFSC_Code: new FormControl('', Validators.required),
    note: new FormControl('',)

  });
  constructor(private router: Router) { }

  get firstname() {
    return this.form.get('firstName')
  }
  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['home'])
  }
  onSubmit() {
    alert(JSON.stringify(this.form.value));
    console.log('object :>> ', this.form.value);
  }
  changegender(e) {
    return this.form.get('gender');
  }
}