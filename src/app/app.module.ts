import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { NavbarComponent } from './component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
 import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
 import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/admin/login/login.component';
import { CalculadorasComponent } from './component/calculadoras/calculadoras.component';
import { FullRecipeComponent } from './component/full-recipe/full-recipe.component';
import { DeleteRecipeComponent } from './component/modal/delete-recipe/delete-recipe.component';
import { AddNewRecipeComponent } from './component/modal/add-new-recipe/add-new-recipe.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { RecetasComponent } from './component/recetas/recetas.component';
import { RecomendacionesComponent } from './component/recomendaciones/recomendaciones.component';
       @NgModule({
  declarations: [
    AppComponent,
     NavbarComponent,
     LoginComponent,
     CalculadorasComponent,
     FullRecipeComponent,
     DeleteRecipeComponent,
     AddNewRecipeComponent,
     PrincipalComponent,
     RecetasComponent,
     RecomendacionesComponent

      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
