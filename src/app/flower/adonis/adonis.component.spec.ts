import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdonisComponent } from './adonis.component';

describe('AdonisComponent', () => {
  let component: AdonisComponent;
  let fixture: ComponentFixture<AdonisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdonisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdonisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
