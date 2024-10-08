import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrl: './listar-tarefa.component.css'
})
export class ListarTarefaComponent implements OnInit {
  
  public tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  public ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  public listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  public remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Are you sure? The tarefa '.concat(tarefa.nome).concat(' will be removed!'))) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  public alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa '.concat(tarefa.nome).concat('?'))) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
