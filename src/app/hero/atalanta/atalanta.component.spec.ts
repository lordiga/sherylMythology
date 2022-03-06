import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtalantaComponent } from './atalanta.component';

describe('AtalantaComponent', () => {
  let component: AtalantaComponent;
  let fixture: ComponentFixture<AtalantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtalantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtalantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
