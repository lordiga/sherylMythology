import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheseusComponent } from './theseus.component';

describe('TheseusComponent', () => {
  let component: TheseusComponent;
  let fixture: ComponentFixture<TheseusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheseusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheseusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
