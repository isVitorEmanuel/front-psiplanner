import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../../interfaces/Button.interface';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() btnConfig: ButtonConfig | undefined;

  handleClick() {
    if (this.btnConfig?.doAction) {
      this.btnConfig.doAction();
    }
  }
}
