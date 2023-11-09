import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './Components/loading/loading.component';
import { IonicModule } from '@ionic/angular';
 //import { Chart } from 'chart.js';



@NgModule({
  declarations: [LoadingComponent],

  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[LoadingComponent]
  
})
export class SharedModule { }
