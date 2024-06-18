import { Component, Input } from '@angular/core'
import { Recipe } from '../../../interfaces/recipe/recipe.interface'
import { CommonModule } from '@angular/common'
import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component'

@Component( {
  selector: 'app-recipes-list',
  standalone: true,
  imports: [ CommonModule, RecipeModalComponent ],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
} )
export class RecipesListComponent {
  @Input() recipe: Recipe
}
