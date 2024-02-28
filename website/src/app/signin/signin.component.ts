import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signin!:FormGroup
  constructor(private fb:FormBuilder){
    this.signin=this.fb.group([{
      email:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.email]],
      password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')]]
    }])
  }

}
