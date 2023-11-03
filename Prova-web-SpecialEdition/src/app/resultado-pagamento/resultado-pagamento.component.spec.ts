import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoPagamentoComponent } from './resultado-pagamento.component';

describe('ResultadoPagamentoComponent', () => {
  let component: ResultadoPagamentoComponent;
  let fixture: ComponentFixture<ResultadoPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoPagamentoComponent]
    });
    fixture = TestBed.createComponent(ResultadoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
