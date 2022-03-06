import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeraComponent } from './hera.component';

describe('HeraComponent', () => {
  let component: HeraComponent;
  let fixture: ComponentFixture<HeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
