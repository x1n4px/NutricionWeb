import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewRecipeComponent } from '../modal/add-new-recipe/add-new-recipe.component';
import { RecipesService } from 'src/app/service/recipes.service';
import { DeleteRecipeComponent } from '../modal/delete-recipe/delete-recipe.component';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  datos: any[] = [];
  logged: boolean = false;
    selectedOption: string[] = [];

  constructor(public dialog: MatDialog, private recipeServ: RecipesService, private admin: AdminService) {
    this.datos = recipeServ.getReceta();
    console.log(this.datos);

    if (this.admin.checkLogin()) {
      this.logged = true;
    }

  }



  selectedButton: string = 'todos'; // Índice del botón seleccionado

  selectButton(index: string) {
    this.selectedButton = index;
    this.filtrarRecetas(index);
  }

  recetasFiltradas: any[] = [];
  filtrarRecetas(index: string) {
    if (index === 'todos') {
      this.recetasFiltradas = this.datos;
    } else {
      this.recetasFiltradas = this.datos.filter((receta) => receta.enfermedad && receta.enfermedad[index]);

    }
  }


  addNewRecipeModal() {
    let dialogRef = this.dialog.open(AddNewRecipeComponent, {

    });
  }

  eliminarReceta(receta: any): void {
    this.dialog.open(DeleteRecipeComponent, {
      data: {
        recipeElimnate: receta
      }
    });
  }


  ver(receta: any) {

  }
}
