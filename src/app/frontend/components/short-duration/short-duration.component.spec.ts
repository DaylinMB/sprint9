import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortDurationComponent } from './short-duration.component';

describe('ShortDurationComponent', () => {
  let component: ShortDurationComponent;
  let fixture: ComponentFixture<ShortDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortDurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
