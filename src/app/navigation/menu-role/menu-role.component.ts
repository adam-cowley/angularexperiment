import { Component, OnInit, Input } from '@angular/core';
import { Role } from 'src/app/role.interface';

@Component({
  selector: 'navigation-menu-role',
  templateUrl: './menu-role.component.html',
  styleUrls: ['../navigation.component.scss']
})
export class MenuRoleComponent implements OnInit {

  @Input()
  role: Role;

  constructor() { }

  ngOnInit(): void {
  }

}
