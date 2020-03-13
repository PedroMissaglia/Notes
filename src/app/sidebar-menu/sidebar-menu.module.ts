import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { PoModule, PoToolbarModule } from '@portinari/portinari-ui';
import { PoMenuModule } from '@portinari/portinari-ui';



@NgModule({
  declarations: [SidebarMenuComponent],
  imports: [
    CommonModule,
    PoModule,
    PoToolbarModule,
    PoMenuModule
  ],
  exports: [SidebarMenuComponent]
})
export class SidebarMenuModule { }
