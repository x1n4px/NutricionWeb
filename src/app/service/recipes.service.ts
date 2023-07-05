import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private readonly localStorageKey = 'recetas'; // Clave para guardar/recuperar los datos en localStorage
  recetas: any[] = [];

  constructor() {
    this.recetas = this.getRecetasFromLocalStorage();
  }


  getReceta(): any[] {
    return this.recetas;
  }

  agregarReceta(nuevaReceta: any): void {
    this.recetas.push(nuevaReceta);
    this.saveRecetasToLocalStorage();
  }

  private getRecetasFromLocalStorage(): any[] {
    const storedRecetas = localStorage.getItem(this.localStorageKey);
    return storedRecetas ? JSON.parse(storedRecetas) : [];
  }

  private saveRecetasToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.recetas));
  }

  eliminarReceta(receta: any): void {
    const index = this.recetas.indexOf(receta);
    if (index !== -1) {
      this.recetas.splice(index, 1);
    }

    this.saveRecetasToLocalStorage();
  }
}
