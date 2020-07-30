import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationModule } from './navigation/navigation.module';
import { Neo4jModule } from './neo4j/neo4j.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NavigationModule,
    Neo4jModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
