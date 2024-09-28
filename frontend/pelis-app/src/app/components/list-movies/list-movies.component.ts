import { Component, inject, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
})
export class ListMoviesComponent implements OnInit {
  movies: Movie[] = [];
  private movieService = inject(MovieService);

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data:Movie[]) => {
      this.movies = data
    })
  }
}
