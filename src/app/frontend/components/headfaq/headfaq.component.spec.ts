import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadfaqComponent } from './headfaq.component';

describe('HeadfaqComponent', () => {
  let component: HeadfaqComponent;
  let fixture: ComponentFixture<HeadfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadfaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
