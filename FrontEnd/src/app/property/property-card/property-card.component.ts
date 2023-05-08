import { Component } from "@angular/core";


@Component({
    selector:'app-property-card',
    // template:``,
    templateUrl:'property-card.component.html',
    // styles:[`h1 {font-weight:normal;}`],
    styleUrls:['property-card.component.css']

})
export class PropertyCardComponent{
    Property: any={
        "ID":"1",
        "Name":"Birla House",
        "Type":"House",
        "Price":12000
    }
}