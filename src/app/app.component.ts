import { Component } from '@angular/core';
import { ButtonModule, Button } from 'primeng/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'arech-solutions';
}
