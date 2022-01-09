import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtchingComponent } from './etching.component';

describe('EtchingComponent', () => {
  let component: EtchingComponent;
  let fixture: ComponentFixture<EtchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
