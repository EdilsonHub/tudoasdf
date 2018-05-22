import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCardsComponent } from './produto-cards.component';

describe('ProdutoCardsComponent', () => {
  let component: ProdutoCardsComponent;
  let fixture: ComponentFixture<ProdutoCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
