import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDevComponent } from './listado-dev.component';

describe('ListadoDevComponent', () => {
  let component: ListadoDevComponent;
  let fixture: ComponentFixture<ListadoDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoDevComponent]
    });
    fixture = TestBed.createComponent(ListadoDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
