import { Component, OnInit } from '@angular/core';
import { Neo4jService } from './neo4j/neo4j.service';
import { Driver } from 'neo4j-driver'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Neo4j Administrator';

  driver: Driver;

  // constructor(private readonly neo4jService: Neo4jService) { }

  ngOnInit() {
    // this.driver = this.neo4jService.getDriver()

    // console.log('driver is', this.driver);

  }

}
