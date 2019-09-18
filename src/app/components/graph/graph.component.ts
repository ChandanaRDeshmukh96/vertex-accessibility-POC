import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input() stateCode: string;
  @Input("stateName") stateName: string;
  @Input("actualSales") actualSales = 150;
  @Input("actualTransaction") actualTransaction = 0;
  @Input("salesThreshold") salesThreshold = 100;
  @Input("transactionThreshold") transactionThreshold = 0 ;
  myChart;
  // isLoadedFor : string = ""; // checking viewChild functionality
  
  ngOnInit() {
    

  }

  ngAfterContentInit(){
    let ctx = document.getElementById('myChart');
   this.myChart = new Chart(ctx,{
      type: 'horizontalBar',
      data: {
          labels: ['sales plot value'],
          datasets: [{
              label: 'number of sales',
              data: [40000],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1,
          }],
          yAxisID:'sales plot value',
              xAxisID:'sales plot value'
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  })
  ctx = document.getElementById('stackedBar');
  var stackedBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ['sales plot value'],
      datasets: [{
          data: [40000],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1,
      }],
      yAxisID:'sales plot value',
          xAxisID:'sales plot value'
  },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }],
        scale:{
          barThickness:'20px',
            barPercentage:0.8
        }
        }
    }
});
  }

  // ngAfterContentInit(){
  //   this.isLoadedFor = this.stateCode;
  // } // checking viewChild functionality
 
}
