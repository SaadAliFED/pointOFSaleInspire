import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiResponse } from 'src/app/Domain/api-response';
import { AuthenticationService } from 'src/app/Shared/shared/Services/authentication.service';
import { UtilityService } from 'src/app/Shared/shared/Services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // showPassword: boolean = false;
  // togglePasswordVisibility(value: boolean) {

  //   this.showPassword = value == true ? true : false;
  // }
  loginForm!: FormGroup;
  showLoader: boolean = true;

  constructor(private router: Router,
    private authService: AuthenticationService,
    private toastController: ToastController,
    private utility: UtilityService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
      Role: new FormControl('SuperAdmin', [Validators.required])
    });
  }

  Login() {

    debugger

    this.authService.Login(this.loginForm.value).subscribe((response: ApiResponse) => {
      if (response.IsSuccess) {
        this.utility.SetLoginData(response);
        this.presentSuccessToast('Login Successfully');

      } else {
        this.presentErrorToast('Invalid credentials');
      }
    });


  }

  async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000, // Duration in milliseconds
      position: 'top', // 'top', 'bottom', or 'middle'
      color: 'success', // You can set the color to match your app's styling
    });
    toast.present();
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000, // Duration in milliseconds
      position: 'top', // 'top', 'bottom', or 'middle'
      color: 'danger', // You can set the color to match your app's styling
    });
    toast.present();
  }
}
