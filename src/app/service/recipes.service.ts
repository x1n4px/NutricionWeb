import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private readonly localStorageKey = 'recetas'; // Clave para guardar/recuperar los datos en localStorage
  recetas: any[] = [];

  recet = [
    {
      imagen: "data:image/jpeg;base64,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",
      titulo: "Ensalada Cesar",
      macronutrientes: {
        proteinas: "8.4",
        grasas: "10",
        HC: "9.8",
      },
      receta: "<h2>Preparación de la salsa Cesar</h2><p>Para preparar la famosa salsa Cesar, tenemos que introducir en un vaso de batidora las anchoas, la yema del huevo, la cucharada de zumo de limón, el diente de ajo (este se puede quitar de la salsa tal como os comento más adelante), un poco de pimienta blanca o negra, media cucharada de mostaza y el aceite de oliva virgen extra.</p><p>Mezclamos todo bien con una cuchara y batimos todo como si fuese una mayonesa. El brazo de la batidora tiene que empezar desde abajo y batimos desde el fondo. Cuando empiece a formarse como la mayonesa, empezamos a mover de abajo arriba la batidora hasta que esté.</p><p>Cuando esté emulsionada, añadimos el queso Grana Padano rallado. Removemos con la cuchara hasta que quede bien ligada y ya está la famosa salsa César. Dejamos la salsa en la nevera para que enfríe y seguimos con la preparación de la ensalada.</p><h2>Preparación de la ensalada César</h2><p>A la hora de añadir los ingredientes de nuestra ensalada, podemos aromatizarla con el ajo sin necesidad de añadirlo a la salsa. Para ello, en el bol en que vayamos a servir la ensalada, el método es machacar dos dientes de ajo hasta su desintegración y frotar con esta pulpa las paredes del bol y luego quitar la pulpa. Así evitamos la potencia del ajo en la salsa y que no nos repita. Conseguiremos una salsa más suave y todo el sabor del ajo.</p><p>Lavamos la lechuga y escurrimos bien. Una vez limpia, bien lavada, seca la lechuga y cortada, podemos reservarla en la nevera durante 30 minutos. Con esto haremos que la lechuga quede más crujiente.</p><p>En una sartén añadimos un poco de aceite de oliva virgen extra y pasamos la pechuga de pollo (entera, los 100 gramos son 2 filetes grandes de pechuga) en el aceite bien caliente. Cuando estén dorados, apartamos y quitamos el exceso de aceite con un poco de papel absorbente.</p><p>Troceamos la pechuga en tiras largas y delgadas. La receta original es con pollo asado (puedes congelar parte del que te sobre cuando lo hagas en casa y utilizarlo en esta ensalada), pero como veis esta vez va con pollo macerado con un poco de sal de ajo, comino, pimentón dulce y pimienta a la plancha. Retiramos en un plato hasta montar la ensalada.</p><h2>Montaje y presentación final de la ensalada César</h2><p>Respecto al pan, debemos freír los dados de pan en aceite de oliva o tostarlos al horno. Si los freímos, debemos ponerlos sobre papel absorbente para quitar parte del aceite absorbido.</p><p>Los costrones, si los hacemos al horno, después de rociarlos con el aceite usando el spray o un pincel de silicona, podemos ponerles un poquito de pimienta recién molida. Aunque podéis encontrar la típica bolsa de picatostes de pan que venden en todos los supermercados que están muy crujientes, os pueden valer perfectamente.</p><p>Montamos la ensalada con los ingredientes anteriores, incluyendo unas aceitunas negras (eso es cosa mía). Y por último, le añadimos los picatostes de pan. Agregamos la salsa Cesar y aliñamos bien.</p><p>¡A disfrutar! Aquí tenéis una ensalada fresquita y bien completa. Lechuga, pan, pollo y el toque especial de la salsa.</p>",
      ingredientes: ["100gr Pechuga de pollo", "picatostes de pan frito", "1/2 lechuga", "50gr de aceitunas negras", "1 cucharada de limón", "6 anchoas", "1 diente de ajo", "125ml de aceite de olivja virgen extra", "2 yemas de huevo", "1/2 cucharada de mostaza", "50gr de queso curado", "Sal y pimienta"],
      tiempo: "15'",
      enfermedad: {
        renal: false,
        diabetes: false,
        cardiovascular: false,
        hepatica: false,
        intestinal: false,
        bariatrica: false,
        lcd: false
      }
    },
    {
      imagen: "https://www.annarecetasfaciles.com/files/croquetas-puerro-huevo-1-1-scaled.jpg",
      titulo: "Croquetas de jamón",
      macronutrientes: {
        proteinas: "7.4",
        grasas: "10",
        HC: "20",
      },
      receta: "<h2>Preparación</h2><p>1) Lo primero que haremos para preparar las croquetas de jamón serrano será cortar el jamón en taquitos muy pequeños y separar los trozos que tengan más grasa y que no vayamos a usar. Ponemos esos trozos en un cazo, añadimos la leche y ponemos el cazo a fuego medio para que la leche se infusione y coja todo el sabor del jamón. Dejamos que la leche se infusione con el jamón unos 10 minutos y después, retiramos los trozos de jamón.<br><br>2) En una tartera a fuego medio, ponemos a calentar la mantequilla. Añadimos una pizca de sal y la cebolla picada muy muy finita. Añadimos otra pizca de sal, mezclamos y añadimos un chorrito de aceite de oliva virgen extra y pimienta negra molida</p>3) Vamos a dejar cocinar la cebolla unos 5-6 minutos hasta que se ponga doradita. Después, añadimos la harina, mezclamos con unas varillas y cocinamos unos instantes para que pierda el sabor a crudo. A continuación, añadimos los taquitos de jamón serrano y mezclamos bien.<br><br>4) Vamos a cocinar el jamón serrano un par de minutos y después añadimos la leche que infusionamos con los restos de jamón. Añadimos la leche poco a poco pero toda de golpe, a la vez que seguimos removiendo con las varillas. Incorporamos un poco más pimienta negra molida y un poco de nuez moscada rallada.<br><br>5) Seguimos trabajando la masa unos 10 minutos más a fuego bajo sin dejar de remover con las varillas. Cuánto más trabajemos la masa, más cremosas van a quedar las croquetas.      A continuación, cuando tengamos la masa bien trabajada la pasamos a otro recipiente para dejarla enfriar a temperatura ambiente. Preferiblemente usaremos una fuente de poca profundidad y alisaremos las superficie de la masa con una espátula o lengua de gato. Cuando la masa de las croquetas haya perdido temperatura, la taparemos con film transparente que debe estar en contacto con la masa para evitar que el aire forme una costra. Después de que se haya templado a temperatura ambiente, metemos la masa en la nevera y dejamos que se enfríe para que coja consistencia (podemos dejar la masa de las croquetas de un día para otro).<br><br>6) Cuando tengamos la masa de las croquetas bien fría y compacta (después de como mínimo dos horas en la nevera), preparamos el pan rallado en un plato, batimos el huevo y vamos a darle forma a las croquetas con la ayuda de dos cucharas o con las manos. Cuando tengamos la forma de la croqueta hecha, pasamos la croqueta por el huevo batido y después por pan rallado. Cuando tengamos la croqueta cubierta de pan rallado, le damos forma con la mano con una leve presión. Hacemos lo mismo con el resto de la masa hasta tener todas las croquetas listas. <br><br>7) A continuación, colocamos una tartera pequeña o sartén profunda con abundante aceite (de oliva o de girasol) a fuego fuerte. Cuando el aceite esté bien caliente pero sin que llegue a humear, vamos friendo las croquetas en tandas de 3 o 4 croquetas para evitar que el aceite pierda temperatura. Pasados unos segundos les damos la vuelta y cuando estén bien doraditas, las sacamos con una espumadera para escurrir bien el aceite y las vamos colocando sobre papel absorbente para eliminar el exceso de grasa que pudieran tener.<br><br>",
      ingredientes: ["100gr de jamón serrano", "50gr de mantequilla", "20gr de cenolla", "2 cucharadas de aove", "50gr de harina de trigo", "500ml de leche", "Pimienta negra, Nuez moscada, Sal", "Huevo y pan rallado"],
      tiempo: "50",
      enfermedad: {
        renal: false,
        diabetes: false,
        cardiovascular: false,
        hepatica: false,
        intestinal: false,
        bariatrica: false,
        lcd: false
      }
    },
    {
      imagen: "https://img-global.cpcdn.com/recipes/1c3e8584de7d66e4/1200x630cq70/photo.jpg",
      titulo: "Pollo al limón de cocción lenta",
      macronutrientes: {
        proteinas: "26",
        grasas: "9",
        HC: "1",
      },
      receta: "<h2>Preparación</h2><br><p>1) Mezclar orégano y pimienta negra molida en un tazón pequeño. Restregar el pollo con la mezcla.<br><br>2) Derretir la mantequilla a fuego medio en una sartén de tamaño mediano. Dorar el pollo en la mantequilla derretida y luego transferir el pollo a una olla de cocción lenta.<br><br>3) Colocar caldo de pollo, agua, jugo de limón y ajo en la sartén. Llevar al punto de ebullición para que se desprendan de la sartén los trozos dorados. Verter sobre el pollo.<br><br> 4) Cubrir, poner la olla de cocción lenta al máximo durante 2½ horas o al mínimo durante 5 horas.<br><br> 5) Agregar albahaca y adobar el pollo. Cubrir, cocinar al máximo durante 15 a 30 minutos más o hasta que el pollo esté tierno.<br><br><br>      ",
      ingredientes: ["1 cucharada de oregano", "1/4 cucharada de pimienta negra", "2 cucharadas de mantequilla sin sal", "300gr de pechuga de pollo deshuesada y sin piel", "250ml de caldo de pollo", "250ml de agua", "1 cucharada de zumo de limón", "2 dientes de ajo", "1 cucharada de albahaca"],
      tiempo: "5 horas",
      enfermedad: {
        renal: true,
        diabetes: false,
        cardiovascular: false,
        hepatica: false,
        intestinal: false,
        bariatrica: false,
        lcd: false
      }
    },
    {
      imagen: "https://www.palancares.com/wp-content/uploads/2020/09/RISOTTO-DE-SETAS.jpg",
      titulo: "Risotto de setas",
      macronutrientes: {
        proteinas: "2.9",
        grasas: "6.9",
        HC: "15",
      },
      receta: "<h2>Elaboración</h2><br><p>Mientras calentamos el caldo de pollo o verduras, cortamos la cebolla muy fina y la sofreímos con aceite de oliva.Limpiamos y cortamos las setas, las añadimos a la cebolla y salpimentamos al gusto. <br><br>     Cuando se hayan hecho, echamos el arroz y lo dejamos cocer un par de minutos removiéndolo para que no se nos pegue. Agregamos poco a poco el caldo y lo dejamos reducir a fuego medio durante 15/ 20 minutos.<br><br>      Apartamos y añadimos la mantequilla y el queso previamente rallado. Mezclamos bien hasta que adquiera una consistencia cremosa.</p><br><br><br><br>",
      ingredientes: ["300gr de arroz", "300gr de setas", "125gr de queso", "90gr de mantequilla", "1 litro de caldo de pollo", "Una cebolla", "AOVE", "Piemienta negra", "Sal"],
      tiempo: "45'",
      enfermedad: {
        renal: false,
        diabetes: false,
        cardiovascular: false,
        hepatica: false,
        intestinal: false,
        bariatrica: false,
        lcd: false
      }
    }
  ]

  /*
  ,
    {
      imagen: "",
      titulo: "",
      macronutrientes: {
        proteinas: "",
        grasas: "",
        HC: "",
      },
      receta: "",
      ingredientes: [],
      tiempo: "",
      enfermedad: {
        renal: false,
        diabetes: false,
        cardiovascular: false,
        hepatica: false,
        intestinal: false,
        bariatrica: false,
        lcd: false
      }
    }*/
  constructor() {
    //localStorage.setItem(this.localStorageKey, JSON.stringify(this.recet));
    //this.recetas = this.getRecetasFromLocalStorage();
  }


  getReceta(): any[] {
    return this.recet;
  }

  agregarReceta(nuevaReceta: any): void {
    this.recet.push(nuevaReceta);
    //this.saveRecetasToLocalStorage();
  }

  private getRecetasFromLocalStorage(): any[] {
    const storedRecetas = localStorage.getItem(this.localStorageKey);
    return storedRecetas ? JSON.parse(storedRecetas) : [];
  }

  private saveRecetasToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.recetas));
  }

  eliminarReceta(receta: any): void {
    const index = this.recet.indexOf(receta);
    if (index !== -1) {
      this.recet.splice(index, 1);
    }

    //this.saveRecetasToLocalStorage();
  }
}
