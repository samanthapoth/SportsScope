import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
