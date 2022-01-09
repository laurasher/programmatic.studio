import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileshopComponent } from './textileshop.component';

describe('TextileshopComponent', () => {
  let component: TextileshopComponent;
  let fixture: ComponentFixture<TextileshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextileshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
