import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { RecipesService } from '../../services/recipes.service'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { SearchBarFilterPipe } from '../../pipes/search-bar-filter/search-bar-filter.pipe'
import { RecipesListComponent } from './recipes-list/recipes-list.component'

@Component( {
  selector: 'app-recipes',
  standalone: true,
  imports: [ CommonModule, SearchBarFilterPipe, FormsModule, RecipesListComponent ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
} )
export class RecipesComponent implements OnInit {
  recipesList$: any
  recipesIngredients$: any
  @ViewChild( 'searchbar' ) searchbar: ElementRef
  searchText = '';

  constructor ( private recipes: RecipesService ) {}
  ngOnInit(): void {
    this.recipes.getRecipes().subscribe( ( result ) => {
      console.log( result.recipes )
      this.recipesList$ = result.recipes
    } )
  }
}
