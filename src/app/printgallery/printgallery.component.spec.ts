import { ComponentFixture, TestBed } from '@angular/core/testing';

import { printgalleryComponent } from './printgallery.component';

describe('printgalleryComponent', () => {
  let component: printgalleryComponent;
  let fixture: ComponentFixture<printgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ printgalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(printgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
