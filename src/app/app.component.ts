import { Component } from '@angular/core';
import { ButtonComponent } from "./components/button/button.component";
import { ButtonConfig } from './interfaces/Button.interface';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  active: boolean = false;

  configBtn: ButtonConfig = {
    text: "Teste",
    class: "btn secundary-button",
    doAction: () => this.toogle()
  };

  toogle() {
    this.active = !this.active;
  }
}
