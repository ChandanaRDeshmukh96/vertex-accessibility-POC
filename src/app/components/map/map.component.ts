import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import mapStates from '../../assests/JSON/map-states.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Output() updateCurrentState = new EventEmitter<string>();
  @Input() currentSelectedState: string;
  zoomVal: object = [{ height: '400px', width: '600px' },
  { height: '600px', width: '900px' },
  { height: '800px', width: '1200px' }];
  currentHeight: string = this.zoomVal[0].height;
  currentWidth: string = this.zoomVal[0].width;
  zoomValIndex: number = 0;
  stateName: string = "";
  usStates: object = [
    {
      stateCode: "AL",
      stateName: "Alabama"
    },
    {
      stateCode: "AK",
      stateName: "Alaska"
    },
    {
      stateCode: "AZ",
      stateName: "Arizona"
    },
    {
      stateCode: "AR",
      stateName: "Arkansas"
    },
    {
      stateCode: "CA",
      stateName: "California"
    },
    {
      stateCode: "CO",
      stateName: "Colorado"
    },
    {
      stateCode: "CT",
      stateName: "Connecticut"
    },
    {
      stateCode: "DE",
      stateName: "Delaware"
    },
    {
      stateCode: "FL",
      stateName: "Florida"
    },
    {
      stateCode: "GA",
      stateName: "Georgia"
    },
    {
      stateCode: "HI",
      stateName: "Hawaii"
    },
    {
      stateCode: "ID",
      stateName: "Idaho"
    },
    {
      stateCode: "IL",
      stateName: "Illinois"
    },
    {
      stateCode: "IN",
      stateName: "Indiana"
    },
    {
      stateCode: "IA",
      stateName: "Iowa"
    },
    {
      stateCode: "KS",
      stateName: "Kansas"
    },
    {
      stateCode: "KY",
      stateName: "Kentucky"
    },
    {
      stateCode: "LA",
      stateName: "Louisiana"
    },
    {
      stateCode: "ME",
      stateName: "Maine"
    },
    {
      stateCode: "MD",
      stateName: "Maryland"
    },
    {
      stateCode: "MA",
      stateName: "Massachusetts"
    },
    {
      stateCode: "MI",
      stateName: "Michigan"
    },
    {
      stateCode: "MN",
      stateName: "Minnesota"
    },
    {
      stateCode: "MS",
      stateName: "Mississippi"
    },
    {
      stateCode: "MO",
      stateName: "Missouri"
    },
    {
      stateCode: "MT",
      stateName: "Montana"
    },
    {
      stateCode: "NE",
      stateName: "Nebraska"
    },
    {
      stateCode: "NV",
      stateName: "Nevada"
    },
    {
      stateCode: "NH",
      stateName: "New Hampshire"
    },
    {
      stateCode: "NJ",
      stateName: "New Jersey"
    },
    {
      stateCode: "NM",
      stateName: "New Mexico"
    },
    {
      stateCode: "NY",
      stateName: "New York"
    },
    {
      stateCode: "NC",
      stateName: "North Carolina"
    },
    {
      stateCode: "ND",
      stateName: "North Dakota"
    },
    {
      stateCode: "OH",
      stateName: "Ohio"
    },
    {
      stateCode: "OK",
      stateName: "Oklahoma"
    },
    {
      stateCode: "OR",
      stateName: "Oregon"
    },
    {
      stateCode: "PA",
      stateName: "Pennsylvania"
    },
    {
      stateCode: "RI",
      stateName: "Rhode Island"
    },
    {
      stateCode: "SC",
      stateName: "South Carolina"
    },
    {
      stateCode: "SD",
      stateName: "South Dakota"
    },
    {
      stateCode: "TN",
      stateName: "Tennessee"
    },
    {
      stateCode: "TX",
      stateName: "Texas"
    },
    {
      stateCode: "UT",
      stateName: "Utah"
    },
    {
      stateCode: "VT",
      stateName: "Vermont"
    },
    {
      stateCode: "VA",
      stateName: "Virginia"
    },
    {
      stateCode: "WA",
      stateName: "Washington"
    },
    {
      stateCode: "WV",
      stateName: "West Virginia"
    },
    {
      stateCode: "WI",
      stateName: "Wisconsin"
    },
    {
      stateCode: "WY",
      stateName: "Wyoming"
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  zoom(type) {
    if (type == "in" && this.zoomValIndex < 2) {
      this.zoomValIndex += 1;
    }
    else if (type == "out" && this.zoomValIndex > 0) {
      this.zoomValIndex -= 1;
    }
    this.currentHeight = this.zoomVal[this.zoomValIndex].height;
    this.currentWidth = this.zoomVal[this.zoomValIndex].width;
  }

  showGraph(event) {
    console.log("loading Graph for -> " + event.currentTarget.id);
    this.updateCurrentState.emit(event.currentTarget.id);
  }
}
