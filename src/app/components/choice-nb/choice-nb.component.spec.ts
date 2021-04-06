import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceNbComponent } from './choice-nb.component';

describe('ChoiceNbComponent', () => {
  let component: ChoiceNbComponent;
  let fixture: ComponentFixture<ChoiceNbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceNbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceNbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
