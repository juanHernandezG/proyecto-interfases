import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisProyectosComponent } from './mis-proyectos.component';

describe('MisProyectosComponent', () => {
  let component: MisProyectosComponent;
  let fixture: ComponentFixture<MisProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisProyectosComponent]
    });
    fixture = TestBed.createComponent(MisProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
