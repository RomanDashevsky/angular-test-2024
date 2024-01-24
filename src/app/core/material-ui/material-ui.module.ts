import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const MaterialModules = [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule];

@NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules],
})
export class MaterialUiModule {}
