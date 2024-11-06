import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbottomComponent } from './navbottom.component';

describe('NavbottomComponent', () => {
  let component: NavbottomComponent;
  let fixture: ComponentFixture<NavbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
