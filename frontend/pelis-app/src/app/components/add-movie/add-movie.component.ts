import { Router, RouterModule } from "@angular/router";
import { MovieService } from "./../../services/movie.service";
import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { Cast, Movie } from "../../models/movie";

@Component({
  selector: "app-add-movie",
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: "./add-movie.component.html",
  styleUrl: "./add-movie.component.css",
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup = new FormGroup({});
  genres: string[] = [
    "Acción",
    "Comedia",
    "Drama",
    "Ciencia Ficcion",
    "Terror",
  ];
  private fb = inject(FormBuilder);
  private movieService = inject(MovieService);
  private router = inject(Router);

  ngOnInit() {
    this.movieForm = this.fb.group({
      title: ["", Validators.required],
      href: [""],
      year: ["", Validators.required],
      cast: this.fb.array([]),
      genres: this.fb.array([]),
      extract: [""],
      thumbnail: [""],
      thumbnailWidth: [0],
      thumbnailHeight: [0],
    });
  }

  get castFormArray() {
    return this.movieForm.get("cast") as FormArray;
  }

  get genresFormArray() {
    return this.movieForm.get("genres") as FormArray;
  }

  addGenre(genre: string) {
    if (!this.genresFormArray.value.includes(genre)) {
      this.genresFormArray.push(this.fb.control(genre));
    }
  }

  removeGenre(index: number) {
    this.genresFormArray.removeAt(index);
  }

  addCastMember() {
    const castForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
    });
    this.castFormArray.push(castForm);
  }

  removeCastMember(index: number) {
    this.castFormArray.removeAt(index);
  }

  onSubmit() {
    if (this.movieForm.valid) {
      const movie: Movie = this.movieForm.value;
      this.movieService.saveMovie(movie).subscribe({
        next: () => {
          this.router.navigate(["/movies"]);
        },
        error: (error) => {
          alert("Error al guardar la película");
        },
      });
    }
  }
}
