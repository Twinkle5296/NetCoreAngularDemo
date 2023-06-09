import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators,ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent{

  registrationForm: FormGroup;

  constructor(){
    this.registrationForm=new FormGroup({});
  }
   ngOnInit(){
    this.registrationForm=new FormGroup({
      userName: new FormControl('Mark',Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl(null,[Validators.required]),
      mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])

    },this.passwordMatchingValidator );
   }

  
  passwordMatchingValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { notmatched: true };
    };
  }
 

   get userName(){
    return this.registrationForm.get('userName') as FormControl;
   }

   get email(){
    return this.registrationForm.get('email') as FormControl;
   }

   get password(){
    return this.registrationForm.get('password') as FormControl;
   }

   get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
   }

   get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
   }

   onSubmit(){
    console.log(this.registrationForm);
   }
}
