import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components/conversor.component';
import { ConversorService, MoedaService } from './shared/services';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
