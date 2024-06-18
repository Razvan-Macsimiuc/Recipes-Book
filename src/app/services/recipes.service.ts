import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Recipe } from '../interfaces/recipe.interface'
import { Observable } from 'rxjs'

@Injectable( {
  providedIn: 'root'
} )
export class RecipesService {
  private apiKey = 'bb51e782fb104b558005769229b9a172'
  private recipesUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${ this.apiKey }`

  constructor ( private http: HttpClient ) {}

  getRecipes(): Observable<Recipe> {
    const response = this.http.get<Recipe>( this.recipesUrl )
    return response
  }
}
