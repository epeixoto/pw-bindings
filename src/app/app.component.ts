import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: []
})
export class AppComponent {
  //title = 'bindings';

  title = environment.title;
}
