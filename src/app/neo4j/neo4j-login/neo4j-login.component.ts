import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neo4j-login',
  templateUrl: './neo4j-login.component.html',
  styleUrls: ['./neo4j-login.component.scss']
})
export class Neo4jLoginComponent {

  schemes: string[] = [
    'neo4j',
    'neo4j+s',
    'neo4j+ssc',
    'bolt',
    'bolt+s',
    'bolt+ssc',
  ]

  scheme: string;
  host: string;
  port: number;
  username: string;
  password: string;

  constructor() { }

  connect() {
    alert('go')
  }


}
