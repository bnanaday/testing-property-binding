import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  itemImageUrl = 'https://i.ebayimg.com/images/g/gFEAAOSwQJdiTTt9/s-l500.jpg';

  callPhone(value: string) {
    console.warn(`Calling ${value} ...`);
  }
}
