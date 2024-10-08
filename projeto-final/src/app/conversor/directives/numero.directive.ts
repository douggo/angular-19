import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumeroDirective,
      multi: true
    }
  ]
})
export class NumeroDirective implements ControlValueAccessor {

  public onTouched: any;
  public onChange: any;
  
  constructor(private element: ElementRef) { }

  writeValue(obj: any): void {
    this.element.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.element.nativeElement.disabled = isDisabled;
  }

  @HostListener('keyup', ['$event'])
  public onKeyUp($event: any): void {
    let valor: string = $event.target.value;
    let posDecimais: number = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substring(0, posDecimais).concat('.').concat(valor.substring(posDecimais));
    }
    $event.target.value = valor;
    this.onChange(valor);
  }

}
