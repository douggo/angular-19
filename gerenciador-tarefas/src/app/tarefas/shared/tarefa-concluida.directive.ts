import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean;

  constructor(private element: ElementRef) {}

  public ngOnInit(): void {
    if (this.tarefaConcluida) {
      console.log('Adding textDecoration')
      this.element.nativeElement.style.textDecoration = 'line-through';
      console.log(this.element.nativeElement.style.textDecoration);
    }
  }

}
