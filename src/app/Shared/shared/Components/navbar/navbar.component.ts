import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import { ApiResponse } from 'src/app/Domain/api-response';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastController: ToastController,
  ) { }

  ngOnInit() { }
  Logout() {
    this.authService.Logout().subscribe((res: ApiResponse) => {
      if (res.IsSuccess) {
        this.presentSuccessToast('Logout Successfully');
        localStorage.clear();
        this.router.navigate(['auth/login']);
      } else {
        this.presentErrorToast('Logout Failed');
      }
    })
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
