import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmwH404Component } from './smw-h-404.component';

describe('SmwH404Component', () => {
  let component: SmwH404Component;
  let fixture: ComponentFixture<SmwH404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmwH404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmwH404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
