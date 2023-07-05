import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css']
})
export class FullRecipeComponent {
  nombreReceta: any;
  Receta: any;
  selectedOption: string[] = [];
  constructor(private route: ActivatedRoute, private reciperServ: RecipesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nombreReceta = params.get('idReceta');
      this.Receta = this.reciperServ.getReceta().filter(receta => receta.titulo === this.nombreReceta);
      console.log(this.Receta);
      const enfermedad = this.Receta[0].enfermedad;
      this.selectedOption = Object.keys(enfermedad).filter((key) => enfermedad[key] === true);
      console.log(this.selectedOption);
    });
  }
}
