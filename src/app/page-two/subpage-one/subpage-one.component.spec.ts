import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageOneComponent } from './subpage-one.component';

describe('SubpageOneComponent', () => {
  let component: SubpageOneComponent;
  let fixture: ComponentFixture<SubpageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubpageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
