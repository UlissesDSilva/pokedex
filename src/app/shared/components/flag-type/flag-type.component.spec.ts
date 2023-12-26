import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagTypeComponent } from './flag-type.component';

describe('FlagTypeComponent', () => {
  let component: FlagTypeComponent;
  let fixture: ComponentFixture<FlagTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
