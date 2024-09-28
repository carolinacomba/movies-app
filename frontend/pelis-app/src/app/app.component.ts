import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListMoviesComponent, AddMovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pelis-app';
}
