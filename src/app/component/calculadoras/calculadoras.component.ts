import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatCompletion } from 'src/app/class/ia';
import { IaResponseService } from 'src/app/service/ia-response.service';

@Component({
  selector: 'app-calculadoras',
  templateUrl: './calculadoras.component.html',
  styleUrls: ['./calculadoras.component.css']
})
export class CalculadorasComponent implements OnInit {
  valor: any;
  altura!: number;
  peso!: number;
  edad!: number;
  resultado!: number;
  sumatorio: number = 0;
  porcentaje: number = 0;
  densidad: number = 0;
  genero!: number;
  nivelActividad: number = 0;
  iaR: any = '';
  plieguebicipal!: number;
  pliegueabdominal!: number;
  plieguecuadricipital!: number;
  pliegueperoneal!: number;
  pliguesubescapular!: number;
  plieguetricipital!: number;
  plieguesuprailiaco!: number;
  gramoHidratos!: number;
  gramoProteinas!: number;

  cerrarCalculadora: boolean = false;
  cerrarIntercambiosHidratos: boolean = false;
  cerrarIntercambiosProteinas: boolean = false;

  hidrato!: number;
  proteina!: number;
  grasa!: number;

  constructor(private route: ActivatedRoute, private router: Router, private iaResponse: IaResponseService) {

  }



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.valor = params.get('valor');
    });
  }

  balls: boolean = false;
  calcular(valor: any): void {
    if (valor === 'calorias') {
      if (this.genero === 1) {
        this.resultado = (10 * this.peso) + (6.25 * this.altura) - (5 * this.edad) + 5;
      } else {
        this.resultado = (10 * this.peso) + (6.25 * this.altura) - (5 * this.edad) - 161;
      }
      this.resultado *= this.nivelActividad;
    } else if (valor === 'imc') {
      this.balls = !this.balls;
      this.resultado = this.peso / ((this.altura / 100) * (this.altura / 100));
      this.iaResponse.getRecomendacionesIMC(this.resultado).subscribe(
        (Response) => {
          this.balls = !this.balls;
          this.iaR = Response.answer;
          console.log(Response);
        }, (error) => {
          console.log(error);
        })
    } else if (valor === 'pliegues') {
      this.sumatorio = this.pliegueabdominal + this.plieguebicipal + this.plieguecuadricipital + this.pliegueperoneal + this.pliguesubescapular + this.plieguetricipital + this.plieguesuprailiaco;
      if (this.genero == 0) {//mujer
        this.densidad = 1.09949 - (0.0009929 * this.sumatorio) + (0.0000023 * (this.sumatorio * this.sumatorio));
        this.resultado = this.densidad - (0.0001392 * this.edad);
        this.porcentaje = ((4.95 / this.densidad) - 4.5) * 100;

      } else {//hombre
        this.densidad = 1.10938 - (0.0008267 * this.sumatorio) + (0.0000016 * (this.sumatorio * this.sumatorio));
        this.resultado = this.densidad - (0.0002574 * this.edad);
        this.porcentaje = (4.95 / (1.10938 - (0.0008267 * this.sumatorio) + (0.0000016 * (this.sumatorio * this.sumatorio))) - 4.5) * 100;

      }
    }else if(valor === 'intercambios'){
      if (this.genero === 1) {
        this.resultado = (10 * this.peso) + (6.25 * this.altura) - (5 * this.edad) + 5;
      } else {
        this.resultado = (10 * this.peso) + (6.25 * this.altura) - (5 * this.edad) - 161;
      }
      this.resultado *= this.nivelActividad;

      this.grasa = 100 - (this.proteina + this.hidrato);
    }

  }


  lacteosenteros:number=0;
  lacteossemidesnatados:number=0;
  lacteosdesnatados:number=0;
  lacteosazucarados:number=0;
  postreslacteos:number=0;
  hortalizasyverduras:number=0;
  fruta:number=0;
  azucares:number=0;




    IntercambiosCereales!:string;
   cereales!:number;
   sumaH!:number;
   intercambioHS!:number;
   calcularIntercambiosHidratos(){
    this.gramoHidratos = (((this.resultado * (this.hidrato/100))/4));

     this.cereales =
     ((this.lacteosenteros !== 0) ? (this.lacteosenteros*9) : 0) +
    ((this.lacteossemidesnatados !== 0) ? (this.lacteossemidesnatados*9) : 0) +
    ((this.lacteosdesnatados !== 0) ? (this.lacteosdesnatados*12) : 0) +
    ((this.lacteosazucarados !== 0) ? (this.lacteosazucarados*16) : 0) +
    ((this.postreslacteos !== 0) ? (this.postreslacteos*23) : 0) +
    ((this.hortalizasyverduras !== 0) ? (this.hortalizasyverduras*4) : 0) +
    ((this.fruta !== 0) ? (this.fruta*15) : 0);

    // (Gramos de HC - (sumatorio*4))/Gramos HC que aportan los cereales

     this.IntercambiosCereales = ((this.gramoHidratos-this.cereales)/14).toFixed(0);
     this.intercambioHS =
     ((this.lacteosenteros !== 0) ? (this.lacteosenteros*1) : 0) +
    ((this.lacteossemidesnatados !== 0) ? (this.lacteossemidesnatados*1) : 0) +
    ((this.lacteosdesnatados !== 0) ? (this.lacteosdesnatados*1) : 0) +
    ((this.lacteosazucarados !== 0) ? (this.lacteosazucarados*1) : 0) +
    ((this.postreslacteos !== 0) ? (this.postreslacteos*1) : 0) +
    ((this.hortalizasyverduras !== 0) ? (this.hortalizasyverduras*1) : 0) +
    ((this.fruta !== 0) ? (this.fruta*1) : 0)
      +((this.gramoHidratos-this.cereales)/14);

     this.calcularIntercambiosProteinas();

  }

  alimentosproteicosI:number = 0;
  alimentosproteicosII:number = 0;
  alimentosproteicosIII:number = 0;
  alimentosproteicosIV:number = 0;
  alimentosproteicosV:number = 0;

  intercambiosProteinas!:number;
  proteinasRestantes:number = 0;
  calcularIntercambiosProteinas(){
    this.gramoProteinas = ((this.resultado*(this.proteina/100))/4);

    this.proteinasRestantes = (this.lacteosenteros*7) + (this.lacteossemidesnatados*7) + (this.lacteosdesnatados * 9) + (this.lacteosazucarados * 4) + (this.postreslacteos * 4) + (this.hortalizasyverduras * 2) + (this.fruta * 1) + (((this.gramoHidratos-this.cereales)/14)*2);


    this.intercambiosProteinas = (this.gramoProteinas-this.proteinasRestantes)/7;
     this.calcularIntercambiosGrasas();
  }

  grasaHidratos!:number;
  grasaProteinas!:number;
  intercambiosGrasas!:number;
  calcularIntercambiosGrasas(){
    this.grasaHidratos =
    ((this.lacteosenteros !== 0) ? (this.lacteosenteros*7) : 0) +
    ((this.lacteossemidesnatados !== 0) ? (this.lacteossemidesnatados*3) : 0) +
    ((this.lacteosdesnatados !== 0) ? (this.lacteosdesnatados*0) : 0) +
    ((this.lacteosazucarados !== 0) ? (this.lacteosazucarados*2) : 0) +
    ((this.postreslacteos !== 0) ? (this.postreslacteos*3) : 0) +
    ((this.hortalizasyverduras !== 0) ? (this.hortalizasyverduras*0.5) : 0) +
    ((this.fruta !== 0) ? (this.fruta*0.25) : 0) +
    ((this.cereales !== 0) ? (this.cereales*0.5) : 0);

    this.grasaProteinas =
    ((this.alimentosproteicosI !== 0) ? (this.alimentosproteicosI*0.5):0)+
    ((this.alimentosproteicosII !== 0) ? (this.alimentosproteicosII*2):0)+
    ((this.alimentosproteicosIII !== 0) ? (this.alimentosproteicosIII*5):0)+
    ((this.alimentosproteicosIV !== 0) ? (this.alimentosproteicosIV*9):0)+
    ((this.alimentosproteicosV !== 0) ? (this.alimentosproteicosV*15):0);
    this.intercambiosGrasas = (this.grasaHidratos+this.grasaProteinas)/5;


  }

}
