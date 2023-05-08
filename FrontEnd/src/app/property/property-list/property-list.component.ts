import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any>=[
    {
    "ID":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
    },
    {
      "ID":2,
      "Name":"Erose Villa",
      "Type":"Villa",
      "Price":12500
    },
    {
      "ID":3,
      "Name":"Mark List",
      "Type":"Flat",
      "Price":13000
    },
    {
      "ID":4,
      "Name":"Birla House",
      "Type":"House",
      "Price":15000
    },
    {
      "ID":5,
      "Name":"Macro Home",
      "Type":"House",
      "Price":14500
    },
    {
      "ID":6,
      "Name":"Pearl White House",
      "Type":"House",
      "Price":12600
    }


]

  constructor() { }

  ngOnInit() {
  }

}
