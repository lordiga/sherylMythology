import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemeterComponent } from './demeter.component';

describe('DemeterComponent', () => {
  let component: DemeterComponent;
  let fixture: ComponentFixture<DemeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
