import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements AfterViewInit {

  @Input() tarefaConcluida: boolean;

  constructor(private element: ElementRef) {}

  public ngAfterViewInit(): void {
    if (this.tarefaConcluida) {
      this.element.nativeElement.style.textDecoration = 'line-through';
    }
  }

}
