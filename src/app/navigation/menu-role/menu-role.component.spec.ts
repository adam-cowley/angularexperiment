import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRoleComponent } from './menu-role.component';

describe('MenuRoleComponent', () => {
  let component: MenuRoleComponent;
  let fixture: ComponentFixture<MenuRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
