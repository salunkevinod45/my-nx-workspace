import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Hero } from '@angular-demo/ui';

@Component({
  imports: [NxWelcome, RouterModule,Hero],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-demo';

  ctaClick= () => {
    alert('CTA button clicked!');
  }
}
