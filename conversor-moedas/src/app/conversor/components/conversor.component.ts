import { Component, OnInit, ViewChild } from '@angular/core';
import { ConversorService, MoedaService } from '../shared/services';
import { Conversao, ConversaoResponse, Moeda } from '../shared/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css'
})
export class ConversorComponent implements OnInit {
  
  public moedas: Moeda[];
  public conversao: Conversao;
  public possuiErro: boolean;
  public conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {}
  
  public ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  public init(): void {
    this.conversao = new Conversao('USD', 'BRL', null);
  }

  public converter(): void {
    if (this.conversaoForm.form.valid) {
      alert('Convertendo: '.concat(JSON.stringify(this.conversao)));
    }
  }

}
