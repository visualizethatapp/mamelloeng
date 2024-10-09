import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../app/components/toolbar/toolbar.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { NavigationComponent } from '../app/components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     CommonModule,
     RouterOutlet,
     ToolbarComponent,
     HeaderComponent,
     NavigationComponent
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
}
