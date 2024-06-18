import { Pipe, PipeTransform } from '@angular/core'
import { Recipe } from '../../interfaces/recipe/recipe.interface'

@Pipe( {
  name: 'searchBarFilter',
  standalone: true
} )
export class SearchBarFilterPipe implements PipeTransform {

  transform( recipes: Recipe[], searchText: string ): any[] {
    if ( !recipes ) return []
    if ( !searchText ) return recipes
    searchText = searchText.toLowerCase()
    return recipes.filter( recipe => {
      return recipe.title.toLowerCase().includes( searchText )
    } )
  }
}

