import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongStayComponent } from './long-stay.component';

describe('LongStayComponent', () => {
  let component: LongStayComponent;
  let fixture: ComponentFixture<LongStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongStayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
