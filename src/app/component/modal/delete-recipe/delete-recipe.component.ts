import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.css']
})
export class DeleteRecipeComponent {

  receta: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private recetasServ: RecipesService) {
    this.receta = data.recipeElimnate;
  }


  eliminar() {
    this.recetasServ.eliminarReceta(this.receta);
  }
}
