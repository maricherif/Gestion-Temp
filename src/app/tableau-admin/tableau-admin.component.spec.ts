import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAdminComponent } from './tableau-admin.component';

describe('TableauAdminComponent', () => {
  let component: TableauAdminComponent;
  let fixture: ComponentFixture<TableauAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
