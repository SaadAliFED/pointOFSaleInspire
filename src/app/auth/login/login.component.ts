import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Shared/shared/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  // showPassword: boolean = false;
  // togglePasswordVisibility(value: boolean) {
    
  //   this.showPassword = value == true ? true : false;
  // }
  loginForm!:FormGroup;
  showLoader: boolean = true;

  constructor(private router: Router,
    private authService :AuthenticationService,
    
    // private fb:FormBuilder
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
      Role: new FormControl('SuperAdmin', [Validators.required])
    });
  }

  Login(){
    
    debugger
    this.authService.Login(this.loginForm.value).subscribe (res => {
      this.router.navigate(['/home']);
    })
      
  }
}
