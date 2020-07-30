import { Component, OnInit, Input } from '@angular/core';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'navigation-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss'],

})
export class MenuGroupComponent implements OnInit {

  @Input()
  icon: IconDefinition

  @Input()
  title: string;


  constructor() { }

  ngOnInit(): void {
  }

}
