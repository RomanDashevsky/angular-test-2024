import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from './material-ui/material-ui.module';

const modules = [CommonModule, ReactiveFormsModule, MaterialUiModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
