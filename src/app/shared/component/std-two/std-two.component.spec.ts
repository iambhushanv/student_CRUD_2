import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTwoComponent } from './std-two.component';

describe('StdTwoComponent', () => {
  let component: StdTwoComponent;
  let fixture: ComponentFixture<StdTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
