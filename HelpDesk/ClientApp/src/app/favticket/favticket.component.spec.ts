import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavticketComponent } from './favticket.component';

describe('FavticketComponent', () => {
  let component: FavticketComponent;
  let fixture: ComponentFixture<FavticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
