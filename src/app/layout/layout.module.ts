import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
  ],
  declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent]
})
export class LayoutModule { }
