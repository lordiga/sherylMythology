import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarcissusComponent } from './narcissus.component';

describe('NarcissusComponent', () => {
  let component: NarcissusComponent;
  let fixture: ComponentFixture<NarcissusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarcissusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarcissusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
