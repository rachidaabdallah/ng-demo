import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeClientComponent } from './stripe-client.component';

describe('StripeClientComponent', () => {
  let component: StripeClientComponent;
  let fixture: ComponentFixture<StripeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
