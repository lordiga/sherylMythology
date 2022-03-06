import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AphroditeComponent } from './aphrodite.component';

describe('AphroditeComponent', () => {
  let component: AphroditeComponent;
  let fixture: ComponentFixture<AphroditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AphroditeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AphroditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
