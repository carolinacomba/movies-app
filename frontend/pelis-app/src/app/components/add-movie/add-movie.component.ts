import { Router, RouterModule } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup = new FormGroup({});
  genres: string[] = ['Acción', 'Comedia', 'Drama', 'Ciencia Ficcion', 'Terror'];
  private fb = inject(FormBuilder);

  ngOnInit() {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      href: [''],
      year: ['', Validators.required],
      cast: this.fb.array([]),
      genres: this.fb.array([]),
      extract: [''],
      thumbnail: [''],
      thumbnailWidth: [null],
      thumbnailHeight: [null]
    });
  }

  get castFormArray() {
    return this.movieForm.get('cast') as FormArray;
  }

  get genresFormArray() {
    return this.movieForm.get('genres') as FormArray;
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
      firstName: [''],
      lastName: ['']
    });
    this.castFormArray.push(castForm);
  }

  removeCastMember(index: number) {
    this.castFormArray.removeAt(index);
  }

  onSubmit() {
    if (this.movieForm.valid) {
      console.log(this.movieForm.value);
      // Aquí puedes enviar los datos del formulario a tu servicio o API
    }
  }
}