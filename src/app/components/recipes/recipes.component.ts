import { Component, OnInit } from '@angular/core'
import { RecipesService } from '../../services/recipes.service'
import { Results } from '../../interfaces/recipe.interface'
import { CommonModule } from '@angular/common'

@Component( {
  selector: 'app-recipes',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
} )
export class RecipesComponent implements OnInit {
  recipesList$: Results[]
  constructor ( private recipes: RecipesService ) {}
  ngOnInit(): void {
    this.recipes.getRecipes().subscribe( ( recipes ) => {
      this.recipesList$ = recipes.results
    } )
  }
}
