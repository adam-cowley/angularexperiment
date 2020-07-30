import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Neo4jLoginComponent } from './neo4j-login.component';

describe('Neo4jLoginComponent', () => {
  let component: Neo4jLoginComponent;
  let fixture: ComponentFixture<Neo4jLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Neo4jLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Neo4jLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
