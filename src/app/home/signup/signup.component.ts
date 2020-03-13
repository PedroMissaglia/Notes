import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user/user.service';
import { PoNotificationService } from '@portinari/portinari-ui';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'ta-totvs-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignup: FormGroup;
  
  constructor(
    private formBuilder : FormBuilder,
    private userService: UserService,
    private poNotification : PoNotificationService,
    private route: Router) { }

  ngOnInit() {
    this.formSignup = this.formBuilder.group({
      firstname: [''],
      lastname: [''], 
      email: [''],
      password: ['']
    })
  }

  signup(){
    
    this.userService.validateEmail(this.formSignup).subscribe(response => {
      if(response.length){
        console.log(response);
        this.poNotification.error('E-mail já cadastrado.');
      }
      else{
      
       this.userService.postUser(this.formSignup).subscribe(() => {
         this.poNotification.success('Usuário cadastrado.');
         this.route.navigate(['']);
       });
      }});    
  }

}
