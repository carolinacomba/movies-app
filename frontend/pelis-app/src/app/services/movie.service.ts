import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  private http = inject(HttpClient);
  private url: string = "http://localhost:3000/movies";

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }

  saveMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.url, movie);
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`${this.url}/${movie.id}`);
  }
}
