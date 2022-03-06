import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseusComponent } from './perseus.component';

describe('PerseusComponent', () => {
  let component: PerseusComponent;
  let fixture: ComponentFixture<PerseusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerseusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
