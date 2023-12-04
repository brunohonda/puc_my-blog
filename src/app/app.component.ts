import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BioComponent } from './bio/bio.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BioComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
