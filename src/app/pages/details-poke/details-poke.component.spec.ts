import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPokeComponent } from './details-poke.component';

describe('DetailsPokeComponent', () => {
  let component: DetailsPokeComponent;
  let fixture: ComponentFixture<DetailsPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
