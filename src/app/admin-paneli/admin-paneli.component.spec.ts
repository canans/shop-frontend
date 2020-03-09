import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaneliComponent } from './admin-paneli.component';

describe('AdminPaneliComponent', () => {
  let component: AdminPaneliComponent;
  let fixture: ComponentFixture<AdminPaneliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPaneliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaneliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
