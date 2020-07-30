import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MenuGroupComponent } from './menu-group/menu-group.component';
import { MenuDatabaseComponent } from './menu-database/menu-database.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { MenuRoleComponent } from './menu-role/menu-role.component';


@NgModule({
  declarations: [
    NavigationComponent,
    MenuGroupComponent,
    MenuDatabaseComponent,
    MenuUserComponent,
    MenuRoleComponent,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    NavigationComponent,
  ],

})
export class NavigationModule { }
