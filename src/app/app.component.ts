import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  itemImageUrl = '../assets/phone.png';

  callPhone(value: string) {
    console.warn(`Calling ${value} ...`);
  }
}
