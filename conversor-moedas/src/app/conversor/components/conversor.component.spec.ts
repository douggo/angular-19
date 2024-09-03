import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorComponent } from './conversor.component';
import { ConversorService, MoedaService } from '../shared/services';
import { NumeroDirective } from '../directives';
import { ModalCotacaoComponent } from '../utils';
import { DataBrPipe } from '../pipes';
import { FormsModule } from '@angular/forms';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorComponent, NumeroDirective, ModalCotacaoComponent, DataBrPipe],
      providers: [MoedaService, ConversorService, provideHttpClientTesting],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
