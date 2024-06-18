import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Recipes } from '../interfaces/recipe/recipe.interface'
import { Observable } from 'rxjs'

@Injectable( {
  providedIn: 'root'
} )
export class RecipesService {
  private recipesUrl = `http://localhost:3000/recipes`

  constructor ( private http: HttpClient ) {}

  getRecipes(): Observable<Recipes> {
    const response = this.http.get<Recipes>( this.recipesUrl )
    return response
  }

}
