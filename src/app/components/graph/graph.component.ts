import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input("stateName") stateName: string;
  @Input("actualSales") actualSales = 150;
  @Input("actualTransaction") actualTransaction = 0;
  @Input("salesThreshold") salesThreshold = 100;
  @Input("transactionThreshold") transactionThreshold = 0 ;
  constructor() { }

  ngOnInit() {

  }

}
