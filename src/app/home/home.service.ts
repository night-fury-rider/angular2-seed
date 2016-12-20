import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http) {}

  /**
   * @description Function to get favorite movies of Yuvraj Patil
   * @return {Array} List of favorite movies of Yuvraj Patil
   */
  getFavoriteMovies() {
    let url = 'http://demo8344494.mockable.io/getFavoriteMovies';

    return this.http.get(url)
      .map((res) => {
        return res.json()
      });

   }
}


