import { Component } from '@angular/core';
import { ButtonComponent } from "./components/button/button.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  active: boolean = false;

  toggle() {
    this.active = !this.active;
  }
}
