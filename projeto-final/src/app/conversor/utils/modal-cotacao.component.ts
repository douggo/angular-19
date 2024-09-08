import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConversorService } from '../shared/services';
import { Conversao, ConversaoResponse } from '../shared/models';

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrl: './modal-cotacao.component.css'
})
export class ModalCotacaoComponent implements OnInit {
  
  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();

  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversorService) {}
  
  public ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public novaConsulta(): void {
    this.onConfirm.emit();
  }

  public get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }
    return (this.conversao.valor * this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2);
  }

  public get cotacaoPara(): number {
    return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao);
  }

  public get cotacaoDe(): string {
    return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao);
  }

  public get dataCotacao(): string {
    return this.conversorService.dataCotacao(this.conversaoResponse);
  }

}
