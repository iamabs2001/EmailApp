import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule, MatToolbarModule, MatMenuModule,MatButtonModule,
    MatFormFieldModule,MatCardModule,MatGridListModule,MatInputModule,
    MatDividerModule,MatTabsModule,MatTooltipModule
  ],exports : [
    BrowserAnimationsModule,
    MatSidenavModule, MatToolbarModule, MatMenuModule,MatButtonModule,
    MatFormFieldModule,MatCardModule,MatGridListModule,MatInputModule,
    MatDividerModule,MatTabsModule,MatTooltipModule

  ]
})

export class MaterialDesignModule { }
