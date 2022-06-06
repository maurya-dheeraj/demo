import { Component, OnInit } from '@angular/core';
import{FormControl, Validators, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({

    user:new FormControl('',[Validators.required,Validators.pattern('[a-z A-z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),

  })

  submitted = false
  loginUser(){
    // debugger
    // if(this.loginForm.invalid) return
    this.loginForm.value
    this.submitted = true
    console.warn("HI");
    
  }

  get userValidation(){
    return this.loginForm.controls
  }

  // get passwordValidation(){
  //   return this.loginForm.get('password')
  // }
  title="Hello Angular"
  today=Date();

  capString(item:string){
    return item.toUpperCase();
  }
  constructor() { }

  ngOnInit(): void {
  }

  data:any=[];


  fruit=['apple', 'mango','Grapes','banana'];
  dheeru="IamfromDelhi"

  user={
    name:'anil',
    age: 22
}

titleCaseWord(word:"how are you"){
  if(!word)return word;
  return word[0].toUpperCase()+
  word.substring(1).toLocaleLowerCase();
}
}
