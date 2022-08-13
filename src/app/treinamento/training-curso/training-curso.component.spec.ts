import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCursoComponent } from './training-curso.component';

describe('TrainingCursoComponent', () => {
  let component: TrainingCursoComponent;
  let fixture: ComponentFixture<TrainingCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
