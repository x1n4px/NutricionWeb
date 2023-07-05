import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Receta } from 'src/app/class/receta';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './add-new-recipe.component.html',
  styleUrls: ['./add-new-recipe.component.css']
})
export class AddNewRecipeComponent {

  datos: any[] = [];
  showModal: boolean = false;
  nuevoItem: Receta = new Receta('', '', '', '', '', '', '','', false, false, false, false, false, false, false);
  seleccionados: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddNewRecipeComponent>,
    private recipeserv: RecipesService) {
    this.datos = this.recipeserv.getReceta();
    this.seleccionados = [];

  }


  agregarItem() {
    this.recipeserv.agregarReceta(this.nuevoItem);
    this.showModal = false; // Cerrar el modal después de agregar un nuevo dato
  }

  recetas: any[] = [];


  getReceta(): any {
    return this.recipeserv.getReceta();
  }

  mostrarRecetas() {
    this.recetas = this.getReceta();
    console.log(this.recetas);
  }

  guardarSeleccion() {
    console.log(this.seleccionados); // Aquí puedes realizar las acciones necesarias con las opciones seleccionadas
  }

}
