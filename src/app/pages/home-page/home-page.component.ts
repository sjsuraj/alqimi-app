import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  error = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      prefix: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],

      email: ['', Validators.required],
      phn: ['', Validators.required],
      cp: ['', Validators.required],
      pdays: ['', Validators.required],
      stime: ['', Validators.required],
      etime: ['', Validators.required],
      sadd: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zcode: ['', Validators.required],
      country: ['', Validators.required],
      
      ms: ['', Validators.required],
      fname2: ['', Validators.required],
      lname2: ['', Validators.required],
      reln: ['', Validators.required],
      
    });
  }
  //helper method for form's error handling
  get helper() {
    return this.signinForm.controls;
  }

  onSubmit() {
    if(this.signinForm.valid){
    this.router.navigate(['/landing']);
    }
  }
}
