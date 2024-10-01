import { Component, inject, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
})
export class ListMoviesComponent implements OnInit {

  movies: Movie[] = [];
  private movieService = inject(MovieService);
  private router = inject(Router);
  

  navigateToAddMovie() {
    this.router.navigate(['/movies/add-movie']);
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data:Movie[]) => {
      this.movies = data
    })
  }
  
  deleteMovie(_t3: Movie) {
    this.movieService.deleteMovie(_t3).subscribe(() => {
      this.ngOnInit();
    })
  }
}
