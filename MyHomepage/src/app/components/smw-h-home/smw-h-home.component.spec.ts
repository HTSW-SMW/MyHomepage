import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmwHHomeComponent } from './smw-h-home.component';

describe('SmwHHomeComponent', () => {
  let component: SmwHHomeComponent;
  let fixture: ComponentFixture<SmwHHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmwHHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmwHHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
