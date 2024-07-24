import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Iuser } from 'src/app/models/Iuser';

@Component({
  selector: 'app-userRegister',
  templateUrl: './userRegister.component.html',
  styleUrls: ['./userRegister.component.css'],
})
export class UserRegisterComponent implements OnInit {
  userRegisForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userRegisForm = fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      email: [''],
      phoneNo: [''],
      address: fb.group({
        city: [''],
        postalCode: [''],
        street: [''],
      }),
      password: [''],
      confirmPassword: ['']
    });
    //   this.userRegisForm=new FormGroup({
    //     fullName:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{3,}')]),
    //     email:new FormControl(''),
    //     phoneNo:new FormControl(''),
    //     address:new FormGroup(
    //       {
    //         city:new FormControl(''),
    //         postalCode:new FormControl(''),
    //         street:new FormControl(''),
    //       },

    //     ),
    //     password:new FormControl(''),
    //     confirmPassword :new FormControl('')

    //   })
    // }
  }

  ngOnInit() {
    // this.userRegisForm.patchValue({
    //   fullName: 'aya sakr',
    //   email: 'ayasakr1000@gmail.com',
    //   phoneNo:"123",
    //   address:{
    //     city:'ljmkn',
    //     postalCode:'122',
    //     street:"kjhg,jhm"

    //   },



    // });
  }

  get fullName() {
    return this.userRegisForm.get('fullName');
  }

  userregis(){
    let userlogin :Iuser = this.userRegisForm.value as Iuser
    console.log(userlogin)
  }
}
