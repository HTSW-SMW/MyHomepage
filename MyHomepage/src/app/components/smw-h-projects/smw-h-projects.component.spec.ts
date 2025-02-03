import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmwHProjectsComponent } from './smw-h-projects.component';

describe('SmwHProjectsComponent', () => {
  let component: SmwHProjectsComponent;
  let fixture: ComponentFixture<SmwHProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmwHProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmwHProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
