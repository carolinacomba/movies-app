import { Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';

export const routes: Routes = [
    { path: 'movies', component: ListMoviesComponent },
    { path: 'movies/add', component: AddMovieComponent },
    { path: '**', redirectTo: 'movies' }
];
