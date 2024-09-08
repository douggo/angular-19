import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() {}

  public listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  public cadastrar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  public buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }
  
  public atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((object, index, objectArray) => {
        if (tarefa.id === object.id) {
          objectArray[index] = tarefa;
        }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  public remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  public alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((object, index, objectArray) => {
        if (id === object.id) {
          objectArray[index].concluida = !object.concluida;
        }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas); 
  }

}
