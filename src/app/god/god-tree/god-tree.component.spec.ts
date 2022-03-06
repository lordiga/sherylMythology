import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodTreeComponent } from './god-tree.component';

describe('GodTreeComponent', () => {
  let component: GodTreeComponent;
  let fixture: ComponentFixture<GodTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
