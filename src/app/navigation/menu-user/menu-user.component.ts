import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user.interface';

import { faLock, faLockOpen, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navigation-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['../navigation.component.scss']
})
export class MenuUserComponent implements OnInit {


  delete = faTrash;
  suspend = faLock;
  activate = faLockOpen;
  edit = faEdit;

  @Input()
  user: User;

  ngOnInit(): void {
  }

}
