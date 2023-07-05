import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import { CalculadorasComponent } from './component/calculadoras/calculadoras.component';
import { RecomendacionesComponent } from './component/recomendaciones/recomendaciones.component';
import { RecetasComponent } from './component/recetas/recetas.component';
import { FullRecipeComponent } from './component/full-recipe/full-recipe.component';
import { LoginComponent } from './component/admin/login/login.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'calculadora/:valor', component: CalculadorasComponent},
  {path: 'recomendaciones', component: RecomendacionesComponent},
  {path: 'recetas', component: RecetasComponent},
  {path: 'receta/:idReceta', component: FullRecipeComponent},
  {path: 'admin/login', component: LoginComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
export class AppRoutingModule { }
