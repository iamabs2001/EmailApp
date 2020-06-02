import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule, MatToolbarModule, MatMenuModule,MatButtonModule,
    MatFormFieldModule
  ],exports : [
    BrowserAnimationsModule,
    MatSidenavModule, MatToolbarModule, MatMenuModule,MatButtonModule,
    MatFormFieldModule
  ]
})

export class MaterialDesignModule { }
