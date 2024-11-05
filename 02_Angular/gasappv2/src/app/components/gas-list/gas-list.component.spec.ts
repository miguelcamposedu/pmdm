import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasListComponent } from './gas-list.component';

describe('GasListComponent', () => {
  let component: GasListComponent;
  let fixture: ComponentFixture<GasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
