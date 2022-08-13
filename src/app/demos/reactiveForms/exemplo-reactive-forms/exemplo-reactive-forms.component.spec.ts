import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploReactiveFormsComponent } from './exemplo-reactive-forms.component';

describe('ExemploReactiveFormsComponent', () => {
  let component: ExemploReactiveFormsComponent;
  let fixture: ComponentFixture<ExemploReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
