import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular - Field Level Security POC';
  subText = 'Privileges - READ, WRITE(READBLE&EDITABLE), PROTECTED';
  constructor() { }

  ngOnInit() {   
  }
}
