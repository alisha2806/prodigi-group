import { NgModule } from '@angular/core';
import {
  MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule
} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTabsModule,
    MatListModule],
  exports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTabsModule,
    MatListModule]
})

export class AngularMaterialModule { }
