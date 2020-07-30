import { Injectable } from '@angular/core';
import { Driver } from 'neo4j-driver';

@Injectable({
  providedIn: 'root'
})
export class Neo4jService {

  private driver: Driver;

  constructor() { }

  getDriver() {
    return this.driver
  }
}
