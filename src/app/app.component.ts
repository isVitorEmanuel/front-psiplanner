import { Component } from '@angular/core';
import { ButtonComponent } from "./components/button/button.component";
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  active: boolean = false;

  toggle() {
    this.active = !this.active;
  }
}
