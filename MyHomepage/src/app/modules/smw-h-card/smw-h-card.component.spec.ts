import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmwHCardComponent } from './smw-h-card.component';

describe('SmwHCardComponent', () => {
  let component: SmwHCardComponent;
  let fixture: ComponentFixture<SmwHCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmwHCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmwHCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
