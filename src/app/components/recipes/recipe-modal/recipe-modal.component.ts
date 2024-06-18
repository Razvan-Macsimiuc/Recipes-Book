import { Component, Input } from '@angular/core'
import { Recipe } from '../../../interfaces/recipe/recipe.interface'

@Component( {
  selector: 'app-recipe-modal',
  standalone: true,
  imports: [],
  templateUrl: './recipe-modal.component.html',
  styleUrl: './recipe-modal.component.scss'
} )
export class RecipeModalComponent {
  @Input() recipe: Recipe

}
