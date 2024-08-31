import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrl: './jogo-da-velha.component.css'
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) {}

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar()
  }

  public get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  public get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  public get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  public iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  public jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  public exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  public exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  public exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  public get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  public novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }

}
