import { Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';

export const routes: Routes = [
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: 'movies', component: ListMoviesComponent },
    { path: 'movies/add-movie', component: AddMovieComponent },
    { path: '**', redirectTo: 'movies' }
];
