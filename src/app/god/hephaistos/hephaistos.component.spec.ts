import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HephaistosComponent } from './hephaistos.component';

describe('HephaistosComponent', () => {
  let component: HephaistosComponent;
  let fixture: ComponentFixture<HephaistosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HephaistosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HephaistosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
