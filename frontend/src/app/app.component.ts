import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ToolbarComponent]
})
export class AppComponent {
  title: string = 'app works!';
}
