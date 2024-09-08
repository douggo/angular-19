import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent implements OnInit {

  constructor(private service: CalculadoraService) {}

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  ngOnInit() {
    this.limpar();
  }

  public adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concat(this.numero1, numero);
    } else {
      this.numero2 = this.concat(this.numero2, numero);
    }
  }

  public definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    if (this.numero2 !== null) {
      this.resultado = this.service.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      this.limpar();
      this.numero1 = this.resultado.toString();
    }
  }

  public calcular(): void {
    if (this.numero2 === null) {
      return;
    }
    this.resultado = this.service.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    )
  }

  public get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString()
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }

  public limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  private concat(current: string, next: string): string {
    if (current === '0' || current === null) {
      current = '';
    }

    if (next === '.' && current === '') {
      return '0.';
    }

    if (next === '.' && current.indexOf('.') > -1) {
      return current;
    }

    return current + next;
  }

}
