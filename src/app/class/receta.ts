export class Receta {
  imagen: string;
  titulo: string;
  macronutrientes: {
    proteinas: string;
    grasas: string;
    HC: string;
  };
  receta!: string;
  ingredientes!: string;
  tiempo!: string;
  enfermedad: {
    renal: boolean;
    diabetes: boolean;
    cardiovascular: boolean;
    hepatica: boolean;
    intestinal: boolean;
    bariatrica: boolean;
    lcd: boolean;
  };

  constructor(
    imagen: string,
    titulo: string,
    proteinas: string,
    grasas: string,
    HC: string,
    receta: string,
    ingredientes: string,
    tiempo: string,
    renal:boolean,
    diabetes: boolean,
    cardiovascular: boolean,
    hepatica: boolean,
    intestinal: boolean,
    bariatrica: boolean,
    lcd: boolean
  ) {
    this.imagen = imagen;
    this.titulo = titulo;
    this.ingredientes = ingredientes;
    this.macronutrientes = {
      proteinas: proteinas,
      grasas: grasas,
      HC: HC
    };
    this.receta = receta;
    this.enfermedad = {
      renal: renal,
      diabetes: diabetes,
      cardiovascular: cardiovascular,
      hepatica: hepatica,
      intestinal: intestinal,
      bariatrica: bariatrica,
      lcd: lcd
    }
  }
}
