import { Component, VERSION } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'There is ';

  getNapis() {
    return this.name + "the Name";
  }
  click() {
    this.name = 'Changed ';
  }
}
