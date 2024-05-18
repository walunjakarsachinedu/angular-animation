import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSquareComponent } from './animated-square.component';

describe('AnimatedSquareComponent', () => {
  let component: AnimatedSquareComponent;
  let fixture: ComponentFixture<AnimatedSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedSquareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatedSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
