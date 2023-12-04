import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BioComponent } from './bio/bio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BioComponent,
    NavbarComponent,
    PostComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  limit = 3;
  posts = [
    { title: '5 dicas para a sua carreira profissional', text: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end' },
    { title: '5 dicas para a sua carreira profissional', text: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end' },
    { title: '5 dicas para a sua carreira profissional', text: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end' },
    { title: '5 dicas para a sua carreira profissional', text: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end' },
  ];

  showAll() {
    this.limit = this.posts.length;
  }
}
