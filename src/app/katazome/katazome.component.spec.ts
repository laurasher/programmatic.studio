import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatazomeComponent } from './katazome.component';

describe('KatazomeComponent', () => {
  let component: KatazomeComponent;
  let fixture: ComponentFixture<KatazomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatazomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatazomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
