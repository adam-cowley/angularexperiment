import { Component, OnInit, Input } from '@angular/core';
import { Database } from 'src/app/database.interface';
import { faStopCircle, faPlayCircle, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navigation-menu-database',
  templateUrl: './menu-database.component.html',
  styleUrls: ['../navigation.component.scss']
})
export class MenuDatabaseComponent {

  stop = faStopCircle;
  start = faPlayCircle;
  delete = faTrash;
  edit = faEdit;

  @Input()
  database: Database;


}
