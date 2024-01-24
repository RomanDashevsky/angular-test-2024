import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';

const MaterialModules = [MatToolbarModule, MatMenuModule, MatIconModule, MatIconButton];

@NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules],
})
export class MaterialUiModule {}
