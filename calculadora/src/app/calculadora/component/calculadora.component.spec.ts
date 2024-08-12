import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraModule } from '../calculadora.module';
import { By } from '@angular/platform-browser';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      imports: [CalculadoraModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));
    const clickOperacao = 'click';

    btn3.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btn2.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });

  it('deve garantir que 3 - 2 = 1', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnSubtracao = fixture.debugElement.query(By.css('#btnSubtracao'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));
    const clickOperacao = 'click';

    btn3.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btnSubtracao.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btn2.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('1');
  });

  it('deve garantir que 3 * 2 = 6', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnMultiplicacao = fixture.debugElement.query(By.css('#btnMultiplicacao'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));
    const clickOperacao = 'click';

    btn3.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btnMultiplicacao.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btn2.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('6');
  });

  it('deve garantir que 3 / 2 = 1.5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnDivisao = fixture.debugElement.query(By.css('#btnDivisao'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));
    const clickOperacao = 'click';

    btn3.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btnDivisao.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btn2.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler(clickOperacao, null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('1.5');
  });

});
