import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrl: './cadastrar-tarefa.component.css'
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild( 'formTarefa', {static: true}) formTarefa: NgForm
  public tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  public cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
