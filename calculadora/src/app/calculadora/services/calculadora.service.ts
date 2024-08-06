import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string  = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() {}

  public calcular(valor1: number, valor2: number, operacao: string): number {
    let resultado: number = 0;

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = valor1 + valor2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = valor1 - valor2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = valor1 * valor2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = valor1 / valor2;
      break;
      default:
        resultado = 0;
    }
    
    return resultado;
  }

}
