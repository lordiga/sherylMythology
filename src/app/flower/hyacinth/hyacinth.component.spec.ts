import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyacinthComponent } from './hyacinth.component';

describe('HyacinthComponent', () => {
  let component: HyacinthComponent;
  let fixture: ComponentFixture<HyacinthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyacinthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyacinthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
