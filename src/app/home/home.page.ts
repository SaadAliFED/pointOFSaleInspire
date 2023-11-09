import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showLoader: boolean = true;
  chart: any;
  // selectedFilter: string = 'Current Days';
  // records: any;
  // detail:any;
  // detail2:any;

  tableHeader: string = 'header-medium';
  tableTheme: string = 'ion-border';

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.createChartLine();
    this.createChartPie();

  }
  public linechart: any;
  public piechart: any;

  createChartLine() {

    this.linechart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['USA', 'dubai', 'sudia', 'canada', 'eurp'],
        datasets: [
          { label: "Dubai", data: ['Dhirem'], },
          { label: "Sudia", data: ['Dhirem'], },
          { label: "USA", data: ['Dollar'] },
          { label: "Canada ", data: ['USD'], },
          { label: "Eurep", data: ['Dhirem'], },
          { label: "Aus", data: ['Dhirem'], },
        ]
      },
      options: { aspectRatio: 2.5 }
    });
  }
  createChartPie() {
    this.piechart = new Chart("MyChart2", {
      type: 'pie', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['USA','Dubai','Saudia', 'canada', 'eurp'],
        datasets: [{
          label: 'Rating Dataset',
          data: [300, 50, 100,20,30],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(155, 202, 76)',
            'rgb(302, 205, 66)'
          ],
          hoverOffset: 6

        }]
      }

    });
  }
  Logout(){
      this.router.navigate(['/auth/login']);

  }

}

