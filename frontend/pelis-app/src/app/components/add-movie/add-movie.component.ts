import { Router, RouterModule } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  private MovieService = inject(MovieService);
  private router = inject(Router);
}
