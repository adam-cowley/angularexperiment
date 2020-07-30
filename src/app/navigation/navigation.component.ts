import { Component, OnInit } from '@angular/core';
import { faDatabase, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Database } from '../database.interface'
import { User } from '../user.interface'
import { Role } from '../role.interface'
import { Neo4jService } from '../neo4j/neo4j.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  faDatabase = faDatabase
  faUser = faUser
  faLock = faLock

  databases: Database[] = [
    { name: 'system', address: 'localhost:7687', role: 'standalone', requestedStatus: 'online', currentStatus: 'online', default: false },
    { name: 'neo4j', address: 'localhost:7687', role: 'standalone', requestedStatus: 'online', currentStatus: 'online', default: true },
    { name: 'northwind', address: 'localhost:7687', role: 'standalone', requestedStatus: 'offline', currentStatus: 'offline', default: true },
    { name: 'pending', address: 'localhost:7687', role: 'standalone', requestedStatus: 'offline', currentStatus: 'online', default: true },
  ]

  users: User[] = [
    { user: 'neo4j', roles: ['admin', 'PUBLIC'], passwordChangeRequired: false, suspended: false },
    { user: 'northwind', roles: ['PUBLIC'], passwordChangeRequired: false, suspended: false },
    { user: 'disabled', roles: ['PUBLIC'], passwordChangeRequired: false, suspended: true },
  ]

  roles: Role[] = [
    { role: "PUBLIC", },
    { role: "admin", },
    { role: "architect", },
    { role: "editor", },
    { role: "publisher", },
    { role: "reader", },
  ]

  // databasesExpanded: boolean = false
  // loading: boolean = true
  // driver: Neo4jDriver


  constructor(private readonly neo4jService: Neo4jService) { }

  // toggleDatabases() {
    // this.databasesExpanded = !this.databasesExpanded
  // }



  ngOnInit() {
    // console.log(this.neo4jService);
    console.log('init');


  }

}
