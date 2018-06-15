import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoLayoutComponent } from './carrinho-layout.component';

describe('CarrinhoLayoutComponent', () => {
  let component: CarrinhoLayoutComponent;
  let fixture: ComponentFixture<CarrinhoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
