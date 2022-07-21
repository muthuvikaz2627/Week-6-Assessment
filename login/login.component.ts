import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../login.service';

import { User } from '../user';


@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {

  user: User = new User();

  users: any;

  number=102;

  
  deleteMessage: any;

  constructor(private loginService: LoginService) { }

  profileForm = new FormGroup({

    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  });
  get f(){
    return this.profileForm.controls
  }
  get username():any{

    return this.profileForm.get('username');

  }
   // Here we will develope the logic initialis the variable which are comming from forms

  submit() {

    console.log(this.profileForm.value)

    //Here logic will be there Develop your application can add logic here to call API Hit

    this.getUserListData()
    this.user.username=this.f['username'].value;
    this.user.password=this.f['password'].value;
    this.postUser();

    
 }
 deleteUser(id: number) {



  this.loginService.deleteUser(id)



    .subscribe(



      data => {



        console.log(data);



        this.deleteMessage=true;



        this.loginService.getUserList().subscribe(data =>{



          this.users =data



          })



      },



      error => console.log(error));



}

 // this method will post record in backend
 postUser() {                                   //Calls the REST API throgh the services

  this.loginService.createUser(this.user)

    .subscribe(data => console.log(data), error => console.log(error));

  this.user = new User();

}



  // both the methods which are there is respected form must be defined here

  getallUser(){

    //here we are going to call the API fro the get users
  
   this.loginService.getUserList().subscribe((data: any) => {
console.log ("Hii all");
    this.users = data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file
  })


   
  }


  ngOnInit(): void {

  }

   getUserListData(this: any) {

    console.log("Hi this is Inder");

    this.loginService.getUserList().subscribe((data: any) => {

      console.log("Hi this is Meher");




      this.users = data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file.



      console.log(this.users);



      // this.dtTrigger.next();





    })



  }

}