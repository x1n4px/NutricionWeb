import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IaResponseService {

  constructor(private http: HttpClient) { }
  nutritionAPI: string = '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';

  getRecomendacionesIMC(imc: number) {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'e9e005fa40msh45b3b291c0e4e83p14bef4jsn379a46a0b5bd',
      'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com'
    });

    const data = {
      question: `IMC: ${imc.toFixed(2)} .Actua como nutricionista, dame recomendaciones para el imc dado. give me the response in spanish. Dame la respuesta en formato html con su etiquetas correspondientes`
    }



    return this.http.post<any>('https://simple-chatgpt-api.p.rapidapi.com/ask', data, { headers: headers });
  }

  openAI(imc: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.nutritionAPI}`
    });
    const data = {
      model: "gpt-3.5-turbo",
      prompt: `IMC: ${imc.toFixed(2)}. Actúa como nutricionista, dame recomendaciones para el IMC dado. Dámela en español.`,
      max_tokens: 100,
      temperature: 0.8,
      top_p: 1.0,
      n: 1,
      stop: '\n'
    };
    return this.http.post<any>('https://api.openai.com/v1/chat/completions', data, { headers: headers });

  }
}
