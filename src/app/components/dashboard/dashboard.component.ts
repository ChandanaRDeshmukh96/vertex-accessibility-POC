import { Component, OnInit } from '@angular/core';
import { GraphComponent } from "../graph/graph.component";
import mapStates from '../../assests/JSON/map-states.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  currentSelectedState="AL";

  ngOnInit() {
  }

  updateGraphForCurrentState($event){
    this.currentSelectedState=$event
  }
}

/* // -- checking viewChild functionality
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GraphComponent } from "../graph/graph.component";
import mapStates from '../../assests/JSON/map-states.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  isGraphLoadedFor: string= "";

  @ViewChild(GraphComponent, {static:false}) graph;

  constructor() { }

  currentSelectedState="AL";

  ngAfterViewInit() {
    this.isGraphLoadedFor=this.graph.isLoadedFor;
  }

  updateGraphForCurrentState($event){
    this.currentSelectedState=$event
  }
}
*/