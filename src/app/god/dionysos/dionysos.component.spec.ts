import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DionysosComponent } from './dionysos.component';

describe('DionysosComponent', () => {
  let component: DionysosComponent;
  let fixture: ComponentFixture<DionysosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DionysosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DionysosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
