import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyeingComponent } from './dyeing.component';

describe('DyeingComponent', () => {
  let component: DyeingComponent;
  let fixture: ComponentFixture<DyeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyeingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
