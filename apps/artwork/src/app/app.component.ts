import { Component } from '@angular/core';

@Component({
  selector: 'jurisin-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'artwork';

  cond = true;

  private deadCode() {
    if(this.cond) {
      console.log('hooked');
    }
  }
}
