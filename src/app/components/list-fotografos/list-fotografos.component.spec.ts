import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFotografosComponent } from './list-fotografos.component';

describe('ListFotografosComponent', () => {
  let component: ListFotografosComponent;
  let fixture: ComponentFixture<ListFotografosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFotografosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFotografosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
