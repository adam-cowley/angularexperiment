import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDatabaseComponent } from './menu-database.component';

describe('MenuDatabaseComponent', () => {
  let component: MenuDatabaseComponent;
  let fixture: ComponentFixture<MenuDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
