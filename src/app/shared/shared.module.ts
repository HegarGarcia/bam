import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [CardComponent],
  declarations: [CardComponent]
})
export class SharedModule { }
