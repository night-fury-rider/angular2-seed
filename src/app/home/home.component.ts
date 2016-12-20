import {Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent  implements OnInit {

  constructor(private homeService: HomeService) {}

  /**
   * @description name of the author
   * @type {String}
   */
  author:string = "Yuvraj Patil";

  /**
   * @description list of favorite movies
   * @type {Array}
   */
  movies = [];

  ngOnInit() {

  }

  /**
   * @description Function to show favorite movies of Yuvraj Patil
   */
  showFavoriteMovies () {

    this.homeService.getFavoriteMovies()
      .subscribe(repoDetails => {
        this.movies = repoDetails;
      });
  }
}
