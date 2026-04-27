import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdOneComponent } from './std-one.component';

describe('StdOneComponent', () => {
  let component: StdOneComponent;
  let fixture: ComponentFixture<StdOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
