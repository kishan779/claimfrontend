import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  signindetails!: FormGroup; // Declare the property

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // Initialize the form group here
    this.signindetails = this.fb.group({
      password: [''],
      email: ['']
    });
  }

  onSubmit() {
    console.log(this.signindetails.value);
    if (this.signindetails.value.email === "kishan@cognizant.com" && this.signindetails.value.password === "123") {
      this.router.navigateByUrl('/claims');
    }
  }
}