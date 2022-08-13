import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDasboardComponent } from './produto-dasboard.component';

describe('ProdutoDasboardComponent', () => {
  let component: ProdutoDasboardComponent;
  let fixture: ComponentFixture<ProdutoDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoDasboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
